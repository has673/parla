"use server";
import axios from "axios";
import connectMongoDB from "../../../libs/dbConnect";

export async function getDashboardData(type, gender, token, currentPage) {
  try {
    await connectMongoDB();

    const request = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/Customer/getDashboardData`,
      {
        params: {
          page: currentPage,
          limit: 10,
          type,
          gender,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return {
      success: true,
      message: "Providers Fetched Successfully",
      datas: request.data.data,
      status: request.status,
    };
  } catch (err) {
    console.error("Providers Fetched Error:", err);
    return { error: "Providers Fetched Error. Try Again" };
  }
}
