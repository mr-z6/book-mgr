// const request = (args)=>{
//     return new Promise((resolve,rejsect)=>{
//         setTimeout(()=>{
//             console.log(args);
//             resolve(args+1)
//         },300);
    
//     })
// }
// request(1)
// .then(
//     (res1)=>{
//         return request(res1);
//     }
// )
// .then(
//     (res2)=>{
//         return request(res2);
//     }
// )
// .then(
//     (res3)=>{
//         return request(res3);
//     }
// )
// .then(
//     (res4)=>{
//         return request(res4);
//     }
// )
// .then(
//     (res5)=>{
//         console.log('res5:'+res5)
//     }
// )

const fn = async()=>{
    return 1;
};
fn().then((res)=>{
    console.log(res);
});