import fetch from 'node-fetch';

const org = 'khadija-AC';
const token = process.env.GH_TOKEN;

const checkMinutes = async () => {
  const response = await fetch(`https://api.github.com/orgs/${org}/actions/runner-groups`, {
    headers: {
      Authorization: `token ${token}`,
      'Accept': 'application/vnd.github.v3+json',
    },
  });

  const data = await response.json();

  const minutesRemaining = data.billing.total_minutes_used;
  console.log(`Minutes used: ${minutesRemaining}`);
  
  // Retourner les minutes pour les utiliser dans le workflow
  return minutesRemaining;
};

// Exécuter la fonction
checkMinutes().catch(err => console.error(err));
