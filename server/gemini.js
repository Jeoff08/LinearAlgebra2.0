// import "dotenv/config";
// import { GoogleGenAI } from "@google/genai";

// const ai = new GoogleGenAI({
//   apiKey: process.env.AQ.Ab8RN6L6wD3Et5fP8ZObovSTk2z6YdBSVqg99aEMBtevqFUY_g
// });

// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// export async function askGemini(prompt) {
//   const maxRetries = 5;

//   for (let attempt = 0; attempt < maxRetries; attempt++) {
//     try {
//       const response = await ai.models.generateContent({
//         model: "gemini-3.7-flash",
//         contents: prompt
//       });

//       return response.text;

//     } catch (error) {
//       const status = error?.status || error?.code;

//       console.log(`Attempt ${attempt + 1} failed:`, error.message);

//       // Retry temporary server errors
//       if (status === 503 && attempt < maxRetries - 1) {
//         const delay = 1000 * Math.pow(2, attempt);

//         console.log(`Retrying in ${delay / 1000} seconds...`);

//         await sleep(delay);
//         continue;
//       }

//       throw error;
//     }
//   }
// }