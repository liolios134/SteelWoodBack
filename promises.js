async function main() {


    const myp = new Promise((resolve, reject) => {
        let a = 5;
        let b = 6;
        
        setTimeout(() => {
            resolve(a + b);
        }, 5000);
    });

    console.log("\n\n\n");
    console.time("fetch statistics");
    const a = await myp;
    console.log("A: ", a);
    console.timeEnd("fetch statistics");
    
     const all = await Promise.all([

    ]);

    console.log(all);

}

main();

