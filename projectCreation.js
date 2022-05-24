function projectCreation(input) {
        let firstName = input[0];
        let project = Number (input[1]);
        let hrs = project * 3;
        console.log(`The architect ${firstName} will need ${hrs} hours to complete ${project} project/s.`)

}
projectCreation (["Stefanov", "28"]);