import { clerkClient } from "@clerk/express";

// UPDATE THE ROLE OF NORMAL USER TO EDUCATOR
export const updateRoleOfEducator = async (req, res) => {
  try {
    console.log("Auth headers:", req.headers.authorization);
    console.log("req.auth:", req.auth);
    const userId = req.auth?.userId;

    if (!userId) {
      console.log("No userId found in req.auth");
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: user not authenticated" });
    }

    console.log("User ID:", userId);
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "educator",
      },
    });
    return res.status(200).json({
      success: true,
      message: "Role updated successfully, you can upload a course now",
    });
  } catch (err) {
    console.error("Error updating role", err.message);
    return res
      .status(500)
      .json({ success: false, message: "Error updating role" });
  }
};
