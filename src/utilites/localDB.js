// use local storage to applied job data
const addToDb = id => {
    let appliedJob = getappliedJob();
    // add quantity
    const quantity = appliedJob[id];
    if (!quantity) {
        appliedJob[id] = 1;
    }
    localStorage.setItem('applied-job', JSON.stringify(appliedJob));
}

const removeFromDb = id => {
    const appliedJob = getappliedJob();
    if (id in appliedJob) {
        delete appliedJob[id];
        localStorage.setItem('applied-job', JSON.stringify(appliedJob));
    }
}

const getappliedJob = () => {
    let appliedJob = {};

    //get the Applied job from local storage
    const storedCart = localStorage.getItem('applied-job');
    if (storedCart) {
        appliedJob = JSON.parse(storedCart);
    }
    return appliedJob;
}

const deleteappliedJob = () => {
    localStorage.removeItem('applied-job');
}

export {
    addToDb,
    removeFromDb,
    getappliedJob,
    deleteappliedJob
}
