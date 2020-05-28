const doHomework = (subject, callback) => {
    console.log(`Studying ${subject}`);
    callback();
}

const homeworkOver = () => {
    console.log(`Let's play!`);
}

doHomework('Math', homeworkOver);