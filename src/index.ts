
enum Status { New, Working, Closed, Rejected, Cancelled }

function getTasks() {
    let tasks = [
        { id: 1, subject: 'Home page design', priority:'Normal', status: Status.Closed },
        { id: 2, subject: 'API Server deployment', priority:'High', status: Status.New },
        { id: 3, subject: 'About-us page design', priority:'Normal', status: Status.Working },
        { id: 4, subject: 'Email server setup', priority:'Normal', status: Status.New },
    ];

    return tasks;  
}
 
function GiveMeTask(tasks) {
    let total = tasks.length; 
    let nextTaskSubject = '';

    for (let task of tasks) {
        
        if (task.status === Status.New) {
            nextTaskSubject = task.subject;
            break;
        } 
    }

    console.log('Total tasks: ' + total);
    console.log('You will resolve task : ' + nextTaskSubject);
}


const allTasks = getTasks();
GiveMeTask(allTasks);


function getTaskSubjectsByStatus(statusToFilter: Status): Array<string> {

    console.log('Vom cauta task-urile cu statusul ' + Status[statusToFilter]);

    const tasks = getTasks();
    const found: string[] = [];

    for (let t of tasks) {
        if (t.status === statusToFilter) {
            found.push(t.subject);
        }
    }
    return found;
}

function printSubjects(subjects: string[]): void {
    for (let s of subjects) {
        console.log(s);
    }
}

const newTasks = getTaskSubjectsByStatus(Status.New);
printSubjects(newTasks);

// ===03===
function getTaskById(id: number) {
    const tasks = getTasks();
    return tasks.filter(task => task['id'] === id)[0]; 
}

console.log(getTaskById(3));

function skuGen(alfa: string, nr: number) : string {
    return alfa.toUpperCase() + nr + '-' + (Math.random()*10000).toFixed(0);
}

let fnGen: (string, number) => string; 
// "noImplicitAny": false, ne lasa sa mergem mai departe
// Parameter has a name but no type. Did you mean 'arg0: string'?

fnGen = skuGen;

console.log(skuGen('aa1', 5));
console.log(fnGen('bb', 7)); 

let fnGenArr: (string, number) => string;
fnGenArr = (alfa, nr) => { return alfa.toUpperCase() + nr + '-' + (Math.random()*10000).toFixed(0); };

console.log(fnGenArr('arrow', 8));


function createTask(id: number, subject: string, description?: string) {
    console.log('New task: ' + id);
    console.log('Subject: ' + subject);
    if (description) {
        console.log('Description: ' + description);
    }
}

createTask(10, 'New page design');
createTask(11, 'Coding page', 'HTML, CSS si JS code');


function tasksCount(tasks:any = getTasks()) : number {
    return tasks.length;
}

console.log(tasksCount());
console.log(tasksCount([ {id:100}, {id:101} ]));

function closeTasks(verbose: boolean, ...ids: number[]): void {
    ids.forEach(val => {
        let t = getTaskById(val);
        t.status = Status.Closed;
        if(verbose) { console.log('Closing ' + t.subject) }
    });
}

closeTasks(true, 1);
closeTasks(true, 1, 3, 4);


function closeTask(id: number): void;
function closeTask(status: string): void;
function closeTask(param: any): void {
    if (typeof param == 'number') {
        console.log('Caut task dupa id: ' + param);
    }
    if (typeof param == 'string') {
        console.log('Caut task dupa string: ' + param);
    }
}

closeTask(10);
closeTask('Task Important');


// ===04===

