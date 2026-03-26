import { Webhook } from "svix";
import User from "../models/user.js";

// api controller
export const clerkWebhook = async (req, res) => {
  try {
    if (!process.env.CLERK_WEBHOOK_SECRET) {
      throw new Error("Missing CLERK_WEBHOOK_SECRET");
    }

    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const payload = req.body.toString();

    await whook.verify(payload, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = JSON.parse(payload);

    const email = data.email_addresses?.[0]?.email_address || "";
    const name = `${data.first_name || ""} ${data.last_name || ""}`.trim();

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          name,
          email,
          imageUrl: data.image_url || "",
        };

        await User.create(userData);
        return res.status(200).json({ success: true });
      }

      case "user.updated": {
        const userData = {
          name,
          email,
          imageUrl: data.image_url || "",
        };

        await User.findByIdAndUpdate(data.id, userData, {
          upsert: true,
          new: true,
        });

        return res.status(200).json({ success: true });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.status(200).json({ success: true });
      }

      default:
        return res.status(200).json({ message: "Unhandled event" });
    }
  } catch (err) {
    console.error("Webhook error", err.message);
    return res.status(400).json({ error: err.message });
  }
};
