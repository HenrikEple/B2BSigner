const fetch = require('node-fetch');

exports.handler = async (event) => {
  const { org } = event.queryStringParameters;
  const url = `https://data.brreg.no/enhetsregisteret/api/enheter/${org}`;
  return JSON.stringify({ message: "yeah"})

}
//   try {
//     const response = await fetch(url);
    
//     // Check if response is OK and return valid JSON data
//     if (response.ok) {
//       const companyData = await response.json();

//       // Extract relevant company information
//       const company = {
//         name: companyData.navn,
//         address: `${companyData.forretningsadresse.adresse}, ${companyData.forretningsadresse.postnummer} ${companyData.forretningsadresse.poststed}`,
//       };

//       return {
//         statusCode: 200,
//         body: JSON.stringify(company),
//       };
//     } else {
//       return {
//         statusCode: response.status,
//         body: JSON.stringify({ message: 'Company data not found' }),
//       };
//     }
//   } catch (error) {
//     console.error('Error fetching company data:', error);
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ message: 'Error fetching company data', error }),
//     };
//   }
// };