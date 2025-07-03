"use server";
import axios from "axios";
import connectMongoDB from "../../../libs/dbConnect";

export async function getDashboardData(type, gender) {
  try {
    await connectMongoDB();
    console.log(type, "action", gender);
    // const request = await axios.get(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/api/customer/getDashboardData`,
    //   {
    //     params: {
    //       page: 1, // or your dynamic value
    //       limit: 10, // or your dynamic value
    //       type: "all", // or 'active', 'archived', etc.
    //     },
    //   }
    // );

    // const rawPets = await Pet.find({ owner: id })
    //   .select("_id name breed age gender type")
    //   .sort({ createdAt: -1 }) // Get most recently updated first
    //   .lean(); // Return plain JS objects

    // const pets = rawPets.map((pet) => ({
    //   id: pet._id.toString(), // Convert ObjectId to string
    //   name: pet.name,
    //   breed: pet.breed,
    //   age: pet.age,
    //   gender: pet.gender,
    //   type: pet.type,
    // }));

    // return {
    //   success: true,
    //   message: "Pets Fetched Successfully",
    //   datas: pets,
    // };
  } catch (err) {
    console.error("Pets Fetched Error:", err);
    return { error: "Pets Fetched Error. Try Again" };
  }
}
