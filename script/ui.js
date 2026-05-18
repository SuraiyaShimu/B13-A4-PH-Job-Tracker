let currentFilter = "all";

function renderJobs(list){
    const container = document.getElementById("job-container");
    container.innerHTML = "";

    let filtered = list.filter(job => {
        if(currentFilter === "all") 
            return job.status === "all";
        return job.status === currentFilter;
    });

    if(filtered.length === 0){
        show("empty-state");
        return;
    }else{
        hide ("empty-state");
    }
    filtered.forEach(job => {
        const div = document.createElement("div");

        div.innerHTML = `
        <div class="p-4 bg-white rounded shadow space-y-2">
           <h2 class="font-bold"> ${job.company}</h2>
           <p>${job.position}</p> 
           <p>${job.location} . ${job.type} . ${job.salary} </p> 
           </p>${job.description}</p>
        
           <div class="flex gap-2">
               <button onclick="setStatus(${job.id}, 'interview')" class="btn btn-sm text-green-600 border border-green-500 bg-white ">Interview</button>
               <button onclick="setStatus(${job.id}, 'rejected')" class="btn btn-sm text-red-600 border border-red-500 bg-white">rejected</button>
               <button onclick="deleteJob(${job.id})" class="btn btn-sm ">Delete</button>
           </div>
       </div>
        `;
        container.appendChild(div);
    });
    updateDashboard();
}

function setStatus(id, status){
    const job = jobs.find(j => j.id === id);
    job.status = status;
    renderJobs(jobs);
}

function deleteJob(id){
    jobs = jobs.filter(job => job.id !== id);
    renderJobs(jobs);
}

function filterJobs(type){
    currentFilter = type;
    renderJobs(jobs);
}

function updateDashboard(){
    let total = jobs.length;
    let interview = jobs.filter(j => j.status === "interview").length;
    let rejected = jobs.filter(j => j.status === "rejected").length;

    updateText("total-count", total);
    updateText("interview-count", interview);
    updateText("rejected-count", rejected);

}

renderJobs(jobs);

