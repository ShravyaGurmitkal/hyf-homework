//Adding an activity
const activities = [];

function addActivity(activity, duration) {
    if (typeof activity === 'string' && typeof duration === 'number') {
        const date = new Date().toLocaleDateString("en-US");
        activities.push({
            date,
            activity,
            duration,
        });
    } else {
        console.log("activity should be string and duration should be number")
    }
}

addActivity("Youtube", 30);
addActivity("Instagram", 30);
//added another object with different date to check other functionalities
activities.push({
    date : "11/13/2016",
    activity : "Facebook",
    duration: 20,
})
console.log(activities);

//Show my status for all the activities
function showStatus(activities) {
    let totalUsageTiime = 0;
    const usageLimt = 120;
    if (activities.length !== 0) {
        for (activity of activities) {
            totalUsageTiime += activity.duration;
        }
        
        console.log(`You have added ${activities.length} activities. They amount to ${totalUsageTiime} min. of usage`);
        
        //Usage limit
        if(totalUsageTiime >= usageLimt) {
            console.log(`You have reached your usage limit ${usageLimt} min., no more smartphoning for you!`);
        } else {
            console.log(`You have more only ${usageLimt - totalUsageTiime} min. for smartphoning`);
        }
    } else{
        console.log("Add some activities before calling showStatus");
    }
}

showStatus(activities);

//show my status of the number of activities for that specific day
function showStatusOfDay(activities) {
    const activitiesOfDay = activities.filter(activity => activity.date === new Date().toLocaleDateString("en-US"));
    console.log('Below are the number of actitivies used and your usage time for today')
    showStatus(activitiesOfDay);
}

showStatusOfDay(activities)

// function for calculating the activity a user has spent the most time on from all the activities
function showMaxActivity(activities) {
    const activityDuration =[];

    activities.forEach(activity => {
       activityDuration.push(activity.duration);
    });
    
    const maxTimeActivities = activities.filter(activity => activity.duration === Math.max(...activityDuration));
    console.log(maxTimeActivities);
}

showMaxActivity(activities);