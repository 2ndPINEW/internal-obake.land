import { retrieveContributionData } from "@/module/github";

export const Contributes = async (props: { size?: number; userName: string }) => {
  const { userName } = props;

  if (!userName) {
    return new Response("userName is required", {
      status: 400,
    });
  }

  const contributes = await retrieveContributionData(userName);

  const { weeks } = contributes.data.user.contributionsCollection.contributionCalendar;

  const size = props.size ?? 10;
  const margin = 1;

  const width = weeks.length * (size + margin * 2);
  const height = 7 * (size + margin * 2);

  const weekItems = weeks.map((week) => {
    return week.contributionDays.map((day) => {
      return (
        <div
          key={day.date}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: day.color,
            margin: `${margin}px`,
          }}
        ></div>
      );
    });
  });

  return (
    <div
      style={{
        background: "white",
        width: `${width}px`,
        height: `${height}px`,
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
      }}
    >
      {weekItems}
    </div>
  );
};
