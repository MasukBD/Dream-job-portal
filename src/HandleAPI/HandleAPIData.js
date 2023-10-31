/* eslint-disable no-unused-vars */
const loadData = async () => {
    const getData = await fetch('jobs.json');
    const jobData = await getData.json();
    return { jobData };
}

export { loadData };