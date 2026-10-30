using System;
using System.IO;

class Program
{
    static void Main()
    {
        // Set the base directory where folders will be created
        string baseDirectory = @"C:\Users\nat_p\OneDrive\Documents\Retna\MonthsTemplate"; // Change this path as needed

        // Ensure the base directory exists
        Directory.CreateDirectory(baseDirectory);

        // Create folders for each month with a numeric prefix
        for (int month = 1; month <= 12; month++)
        {
            string monthName = new DateTime(2025, month, 1).ToString("MMMM");
            string folderName = $"{month}_{monthName}";
            string folderPath = Path.Combine(baseDirectory, folderName);

            Directory.CreateDirectory(folderPath);
            Console.WriteLine($"Created folder: {folderPath}");
        }

        Console.WriteLine("All monthly folders created.");
        Console.ReadLine(); // Keeps the console window open
    }
}
