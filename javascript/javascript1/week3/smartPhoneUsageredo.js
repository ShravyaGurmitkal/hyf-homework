//Adding an activity
let activities = [];

function addActivity(date, activity, duration) {
    activities.push({
        date,
        activity,
        duration,
    })
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Instagram", 60);
addActivity("23/7-18", "Facebook", 10);


//Show my status
function showStatus(activities) {
    if(activities.length === 0) {
        console.log("Add some activities before calling showStatus");
    } else {
        let totalUsageTime = 0;
        const usageLimit = 120;
        for(activity of activities) {
            totalUsageTime += activity.duration;
        }
        console.log(`you have added ${activities.length} activities. They amount to ${totalUsageTime} min. of usage`);

        //Usage limit
        if(totalUsageTime >= usageLimit) {
            console.log(`You have reached your limit ${usageLimit} min, no more smartphoning for you!`);
        } else {
            console.log(`You have more ${usageLimit - totalUsageTime} min limit for smartphoning`);
        }
    }
}

showStatus(activities); // will log out this "You have added 3 activities. They amount to 78 min. of usage"