const closeBtns = document.querySelectorAll(".close");

closeBtns.forEach(close => {
    const id = close.id.split(/[A-Za-z]/)[1];
    console.log(close.id, `#m${id}`)
    close.addEventListener('click', () => {
        console.log("clicked", close.id);
        document.querySelector(`#m${id}`).style.display = 'none';
    });
})

const postWrapper = async (url, body) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });

    const json = await response.json();
    return json;
}

const getWrapper = async url => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}

document.getElementById("comp").addEventListener("click", function () {
    document.querySelector('#m0').style.display = 'flex';
});

document.getElementById("emp").addEventListener("click", function () {
    document.querySelector('#m1').style.display = 'flex';
});


document.getElementById("proj").addEventListener("click", function () {
    document.querySelector('#m2').style.display = 'flex';
});


document.getElementById("dep").addEventListener("click", function () {
    document.querySelector('#m3').style.display = 'flex';
});


document.getElementById("man").addEventListener("click", function () {
    document.querySelector('#m4').style.display = 'flex';
});


document.getElementById("dept").addEventListener("click", function () {
    document.querySelector('#m5').style.display = 'flex';
});


document.getElementById("compv").addEventListener("click", async function () {
    document.querySelector('#m6').style.display = 'flex';
    const tbody = document.querySelector("#m6 table tbody");
    let result = await getWrapper('/company');
    let inner = '';
    result.forEach(company => {
        inner += `
            <tr>
                <td>${company.SS_NO}</td>
                <td>${company.NAME}</td>
                <td>${company.LOCATION}</td>
            </tr>
        `
    });
    tbody.innerHTML = inner;
});

document.getElementById("empv").addEventListener("click", async function () {
    document.querySelector('#m7').style.display = 'flex';
    const tbody = document.querySelector("#m7 table tbody");
    let result = await getWrapper('/employee');
    let inner = '';
    result.forEach(employee => {
        inner += `
            <tr>
                <td>${employee.ID}</td>
                <td>${employee.NAME}</td>
                <td>${employee.GENDER}</td>
                <td>${employee.SALARY}</td>
                <td>${employee.ADDRESS}</td>
                <td>${employee.SS_NO}</td>
                <td>${employee.PROJECT}</td>
            </tr>
        `
    });
    tbody.innerHTML = inner;
});


document.getElementById("projv").addEventListener("click", async function () {
    document.querySelector('#m8').style.display = 'flex';
    const tbody = document.querySelector("#m8 table tbody");
    let result = await getWrapper('/project');
    let inner = '';
    result.forEach(project => {
        inner += `
            <tr>
                <td>${project.NUMBER}</td>
                <td>${project.NAME}</td>
                <td>${project.LOCATION}</td>
                <td>${project.DEPARTMENT}</td>
                <td>${project.SS_NO}</td>
            </tr>
        `
    });
    tbody.innerHTML = inner;
});


document.getElementById("deptv").addEventListener("click", async function () {
    document.querySelector('#m9').style.display = 'flex';
    const tbody = document.querySelector("#m9 table tbody");
    let result = await getWrapper('/department');
    let inner = '';
    result.forEach(department => {
        inner += `
            <tr>
                <td>${department.NUMBER}</td>
                <td>${department.NAME}</td>
                <td>${department.LOCATION}</td>
                <td>${department.COMPANY}</td>
            </tr>
        `
    });
    tbody.innerHTML = inner;
});


document.getElementById("manv").addEventListener("click", async function () {
    document.querySelector('#m10').style.display = 'flex';
    const tbody = document.querySelector("#m10 table tbody");
    let result = await getWrapper('/manager');
    let inner = '';
    result.forEach(manager => {
        inner += `
            <tr>
                <td>${manager.ID}</td>
                <td>${manager.NAME}</td>
                <td>${manager.GENDER}</td>
                <td>${manager.SALARY}</td>
                <td>${manager.ADDRESS}</td>
                <td>${manager.DEPARTMENT}</td>
                <td>${manager.PROJECT}</td>
            </tr>
        `
    });
    tbody.innerHTML = inner;
});


document.getElementById("depv").addEventListener("click", async function () {
    document.querySelector('#m11').style.display = 'flex';
    const tbody = document.querySelector("#m11 table tbody");
    let result = await getWrapper('/dependent');
    let inner = '';
    result.forEach(dependent => {
        inner += `
            <tr>
                <td>${dependent.NAME}</td>
                <td>${dependent.GENDER}</td>
                <td>${dependent.BIRTH_DATE}</td>
                <td>${dependent.RELATION}</td>
                <td>${dependent.EMPLOYEE}</td>
            </tr>
        `
    });
    tbody.innerHTML = inner;
});


document.getElementById('comp-f').addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
        NAME:{value: NAME}, 
        SS_NO:{value: SS_NO}, 
        LOCATION:{value: LOCATION}} = e.target;
    const result = await postWrapper('/company', {NAME, SS_NO, LOCATION});
    if (result.error) {
        let msg = '\nPlease try again';
        if (result.error.original && result.error.original.code === 'ER_DUP_ENTRY') {
            msg = '\nPlease enter a unique SS_NO'
        }
        return alert(`Could not add company. ${msg}`);
    }
    alert('Company Added Successfully.');
    document.querySelector('#m0').style.display = 'none';
}); 


document.getElementById('dept-f').addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
        NAME:{value: NAME}, 
        COMPANY:{value: COMPANY}, 
        NUMBER: {value: NUMBER},
        LOCATION:{value: LOCATION}} = e.target;
    const result = await postWrapper('/department', {NAME, COMPANY, NUMBER, LOCATION});
    if (result.error) {
        let msg = '\nPlease check all the fields and try again';
        if (result.error.original && result.error.original.code === 'ER_DUP_ENTRY') {
            msg = '\nPlease enter a unique department Number/ID'
        }
        return alert(`Could not add department. ${msg}`);
    }
    alert('Department Added Successfully.');
    document.querySelector('#m5').style.display = 'none';
}); 

document.getElementById('proj-f').addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
        NAME:{value: NAME}, 
        SS_NO:{value: SS_NO}, 
        DEPARTMENT:{value: DEPARTMENT}, 
        NUMBER: {value: NUMBER},
        LOCATION:{value: LOCATION}} = e.target;
    const result = await postWrapper('/project', {NAME, SS_NO, DEPARTMENT, NUMBER, LOCATION});
    if (result.error) {
        let msg = '\nPlease check all the fields and try again';
        if (result.error.original && result.error.original.code === 'ER_DUP_ENTRY') {
            msg = '\nPlease enter a unique project Number/ID'
        }
        return alert(`Could not add project. ${msg}`);
    }
    alert('Project Added Successfully.');
    document.querySelector('#m2').style.display = 'none';
}); 

document.getElementById('emp-f').addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
        NAME:{value: NAME}, 
        SS_NO:{value: SS_NO}, 
        ID:{value: ID}, 
        GENDER: {value: GENDER},
        SALARY: {value: SALARY},
        PROJECT: {value: PROJECT},
        ADDRESS:{value: ADDRESS}} = e.target;
    const result = await postWrapper('/employee', {NAME, SS_NO, ID, GENDER, SALARY, PROJECT, ADDRESS});
    if (result.error) {
        let msg = '\nPlease check all the fields and try again';
        if (result.error.original && result.error.original.code === 'ER_DUP_ENTRY') {
            msg = '\nPlease enter a unique employee Number/ID'
        }
        return alert(`Could not add Employee. ${msg}`);
    }
    alert('Employee Added Successfully.');
    document.querySelector('#m1').style.display = 'none';
}); 

document.getElementById('dependent-f').addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
        NAME:{value: NAME}, 
        GENDER:{value: GENDER}, 
        BIRTH_DATE:{value: BIRTH_DATE}, 
        RELATION: {value: RELATION},
        EMPLOYEE: {value: EMPLOYEE}} = e.target;
    const result = await postWrapper('/dependent', {NAME, GENDER, RELATION, BIRTH_DATE, EMPLOYEE});
    if (result.error) {
        let msg = '\nPlease check all the fields and try again';
        // if (result.error.original && result.error.original.code === 'ER_DUP_ENTRY') {
        //     msg = '\nPlease enter a unique relation to employee. You can add a number if necessary.'
        // }
        return alert(`Could not add Dependent. ${msg}`);
    }
    alert('Dependent Added Successfully.');
    document.querySelector('#m3').style.display = 'none';
}); 

document.getElementById('manager-f').addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
        NAME:{value: NAME}, 
        DEPARTMENT:{value: DEPARTMENT}, 
        ID:{value: ID}, 
        GENDER: {value: GENDER},
        SALARY: {value: SALARY},
        PROJECT: {value: PROJECT},
        ADDRESS:{value: ADDRESS}} = e.target;
    console.log(NAME);
    const result = await postWrapper('/manager', {NAME, DEPARTMENT, ID, GENDER, SALARY, PROJECT, ADDRESS});
    if (result.error) {
        let msg = '\nPlease check all the fields and try again';
        if (result.error.original && result.error.original.code === 'ER_DUP_ENTRY') {
            msg = '\nPlease enter a unique manager Number/ID'
        }
        return alert(`Could not add manager. ${msg}`);
    }
    alert('Manager Added Successfully.');
    document.querySelector('#m4').style.display = 'none';
}); 

document.getElementById('dependent-f').addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
        NAME:{value: NAME}, 
        GENDER:{value: GENDER}, 
        BIRTH_DATE:{value: BIRTH_DATE}, 
        RELATION: {value: RELATION},
        EMPLOYEE: {value: EMPLOYEE}} = e.target;
    const result = await postWrapper('/dependent', {NAME, GENDER, RELATION, BIRTH_DATE, EMPLOYEE});
    if (result.error) {
        let msg = '\nPlease check all the fields and try again';
        // if (result.error.original && result.error.original.code === 'ER_DUP_ENTRY') {
        //     msg = '\nPlease enter a unique relation to employee. You can add a number if necessary.'
        // }
        return alert(`Could not add Dependent. ${msg}`);
    }
    alert('Dependent Added Successfully.');
    document.querySelector('#m3').style.display = 'none';
}); 