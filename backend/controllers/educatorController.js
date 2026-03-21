import { clerkClient } from "@clerk/express";

// UPDATE THE ROLE OF NORMAL USER TO EDUCATOR
export const updateRoleOfEducator = async (req, res) => {
  try {
    const userId = req.auth?.userId;

    if (!userId) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized: user not authenticated" });
    }

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
