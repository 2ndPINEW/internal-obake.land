const TOKEN = process.env.GITHUB_API_TOKEN;

declare namespace Github {
  type ContributionDay = {
    contributionCount: number;
    date: string;
    color: string;
  };

  type ApiResponse = {
    data: {
      user: {
        contributionsCollection: {
          contributionCalendar: {
            totalContributions: number;
            weeks: {
              contributionDays: ContributionDay[];
            }[];
          };
        };
      };
    };
  };
}

const query = `
query($userName:String!) {
  user(login: $userName){
    contributionsCollection {
      contributionCalendar {
        totalContributions
        weeks {
          contributionDays {
            contributionCount
            date
            color
          }
        }
      }
    }
  }
}
`;

export async function retrieveContributionData(
  userName: string
): Promise<Github.ApiResponse> {
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
