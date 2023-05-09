// https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&daily=precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max&timezone=Asia%2FTokyo

declare namespace OpenMetro {
  type ApiResponse = {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number;
            weeks: {
              contributionDays: [];
            }[];
          };
        };
      };
    };
  };
}

export async function retrieveContributionData(userName: string): Promise<Github.ApiResponse> {
  const variables = `
  {
    "userName": "${userName}"
  }
`;
  const body = {
    query,
    variables,
  };
  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify(body),
  });
  return res.json();
}
