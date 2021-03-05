module.exports = (mongoose) => {
  const teamSchema = mongoose.Schema(
    {
      displayName: {
        type: String,
      },
      officeLocation: {
        type: String,
      },
    },
    { timestamps: true }
  );

  const Team = mongoose.model("Team", teamSchema);

  return Team;
};
