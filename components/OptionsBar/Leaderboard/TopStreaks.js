var playerData = [
    {
        account: '0x298475jb3453489yknb340v34',
        nickname: 'JohnK',
        dailyStreak: 10,
        winStreak: 10,
        goldenStreak: 5,
    },
    {
        account: '0x298475jb3453489yknb340v34',
        nickname: 'Jim',
        dailyStreak: 365,
        winStreak: 2,
        goldenStreak: 0,
    },
    {
        account: '0x298475jb3453489yknb340v34',
        nickname: 'Bob',
        dailyStreak: 18,
        winStreak: 7,
        goldenStreak: 7,
    },
]

const topDailyStreaks = playerData
    .sort((a, b) => b.dailyStreak - a.dailyStreak)
    .slice(0, 3)

const topWinStreaks = playerData
    .sort((a, b) => b.winStreak - a.winStreak)
    .slice(0, 3)

const topGoldenStreaks = playerData
    .sort((a, b) => b.goldenStreak - a.goldenStreak)
    .slice(0, 3)

export { playerData, topDailyStreaks, topWinStreaks, topGoldenStreaks }
