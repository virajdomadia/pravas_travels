import { connectToDatabase } from "./mongodb";
import { PackageModel } from "@/models/Package";
import { packages } from "./data";

export async function seedDatabase() {
  try {
    await connectToDatabase();

    // Check if packages already exist
    const existingCount = await PackageModel.countDocuments();
    if (existingCount > 0) {
      console.log(`Database already has ${existingCount} packages. Skipping seed.`);
      return;
    }

    // Insert all packages
    const result = await PackageModel.insertMany(packages);
    console.log(`✓ Seeded ${result.length} packages to MongoDB`);
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  }
}
