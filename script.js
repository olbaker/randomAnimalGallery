alert("Bonjour!");

function changeAnimal() {
    let animalNumber = Math.floor(Math.random() * 6);
    if(animalNumber === 0) {
        document.getElementById('button').innerHTML = 'Wolf';
        document.getElementById('img-1').src = 'https://images.unsplash.com/photo-1588167056547-c183313da47c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29sZnxlbnwwfHwwfHx8MA%3D%3D';
        document.getElementById('img-2').src = 'https://images.unsplash.com/photo-1577980888576-4ba53bae1c69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvbGZ8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-3').src = 'https://images.unsplash.com/photo-1547407139-3c921a66005c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29sZnxlbnwwfHwwfHx8MA%3D%3D';
        document.getElementById('img-4').src = 'https://plus.unsplash.com/premium_photo-1661888787856-43346704e66c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29sZnxlbnwwfHwwfHx8MA%3D%3D';
        document.getElementById('img-5').src = 'https://images.unsplash.com/photo-1614599559644-bfddcd9b8bdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29sZiUyMGhvd2xpbmd8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-6').src = 'https://images.unsplash.com/photo-1622698639855-fda2a55e0cbe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbGYlMjBob3dsaW5nfGVufDB8fDB8fHww';
        document.getElementById('img-7').src = 'https://images.unsplash.com/photo-1664573929210-d8f6f8c40582?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        document.getElementById('img-8').src = 'https://images.unsplash.com/photo-1607350999170-b893fef057ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbGZ8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-9').src = 'https://images.unsplash.com/photo-1604608678051-64d46d8d0ffe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbGZ8ZW58MHx8MHx8fDA%3D';
    } else if(animalNumber === 1) {
        document.getElementById('button').innerHTML = 'Bear';
        document.getElementById('img-1').src = 'https://images.unsplash.com/photo-1595173425119-1c54835c1874?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJlYXJ8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-2').src = 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVhcnxlbnwwfHwwfHx8MA%3D%3D';
        document.getElementById('img-3').src = 'https://images.unsplash.com/photo-1601293058843-f34e8dd9ccfd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJlYXJ8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-4').src = 'https://images.unsplash.com/photo-1605132994958-a1728bdc9b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGdyaXp6bHklMjBiZWFyfGVufDB8fDB8fHww';
        document.getElementById('img-5').src = 'https://images.unsplash.com/photo-1597117903702-fb2788ddf816?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBiZWFyfGVufDB8fDB8fHww';
        document.getElementById('img-6').src = 'https://plus.unsplash.com/premium_photo-1664298010187-091137b9e296?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        document.getElementById('img-7').src = 'https://images.unsplash.com/photo-1561127954-65393e6644d1?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        document.getElementById('img-8').src = 'https://plus.unsplash.com/premium_photo-1661897401664-ca20addf3e8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhciUyMGZpc2h8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-9').src = 'https://images.unsplash.com/photo-1541439657027-07133d717c72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    } else if(animalNumber === 2) {
        document.getElementById('button').innerHTML = 'Tiger';
        document.getElementById('img-1').src = 'https://images.unsplash.com/photo-1562552476-8ac59b2a2e46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRpZ2VyfGVufDB8fDB8fHww';
        document.getElementById('img-2').src = 'https://plus.unsplash.com/premium_photo-1661847643150-4e06569d2ec1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGlnZXJ8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-3').src = 'https://plus.unsplash.com/premium_photo-1661895001905-d793f6f38943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRpZ2VyfGVufDB8fDB8fHww';
        document.getElementById('img-4').src = 'https://images.unsplash.com/photo-1616869736815-3362745ab32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHRpZ2VyfGVufDB8fDB8fHww';
        document.getElementById('img-5').src = 'https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGlnZXJ8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-6').src = 'https://images.unsplash.com/photo-1619475762212-da12e5e15f18?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        document.getElementById('img-7').src = 'https://images.unsplash.com/photo-1580069329146-95c480a26866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHRpZ2VyfGVufDB8fDB8fHww';
        document.getElementById('img-8').src = 'https://plus.unsplash.com/premium_photo-1664298515793-1451ed489d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHRpZ2VyfGVufDB8fDB8fHww';
        document.getElementById('img-9').src = 'https://plus.unsplash.com/premium_photo-1661959833633-dca39426d5e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHRpZ2VyfGVufDB8fDB8fHww';
    } else if(animalNumber === 3) {
        document.getElementById('button').innerHTML = 'Leopard';
        document.getElementById('img-1').src = 'https://images.unsplash.com/photo-1546977532-4a61683ea4a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25vdyUyMGxlb3BhcmR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-2').src = 'https://images.unsplash.com/photo-1570463662416-7d8e39fc67e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxlb3BhcmR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-3').src = 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW11ciUyMGxlb3BhcmR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-4').src = 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGVvcGFyZHxlbnwwfHwwfHx8MA%3D%3D';
        document.getElementById('img-5').src = 'https://images.unsplash.com/photo-1574068467946-533eea9838ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGxlb3BhcmR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-6').src = 'https://images.unsplash.com/photo-1573663209453-93f1875e5a7b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxlb3BhcmR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-7').src = 'https://images.unsplash.com/photo-1590654495303-a7be3c9e10af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxlb3BhcmR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-8').src = 'https://images.unsplash.com/photo-1561389789-08bb54255024?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxlb3BhcmR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-9').src = 'https://images.unsplash.com/photo-1486199149722-825253b06114?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxlb3BhcmR8ZW58MHx8MHx8fDA%3D';
    } else if(animalNumber === 4) {
        document.getElementById('button').innerHTML = 'Elephant';
        document.getElementById('img-1').src = 'https://images.unsplash.com/photo-1578326626553-39f72c545b07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVsZXBoYW50fGVufDB8fDB8fHww';
        document.getElementById('img-2').src = 'https://images.unsplash.com/photo-1619111712102-8273abfea0aa?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        document.getElementById('img-3').src = 'https://images.unsplash.com/photo-1505148230895-d9a785a555fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-4').src = 'https://images.unsplash.com/photo-1574241298650-74e9f3649c60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-5').src = 'https://plus.unsplash.com/premium_photo-1661836637560-f6d12331a844?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFzaWFuJTIwZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-6').src = 'https://plus.unsplash.com/premium_photo-1675098496724-65e2d3a972b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-7').src =  'https://images.unsplash.com/photo-1549366021-9f761d450615?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGVsZXBoYW50fGVufDB8fDB8fHww';
        document.getElementById('img-8').src = 'https://images.unsplash.com/photo-1605326152964-56fb991b95ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZXBoYW50fGVufDB8fDB8fHww';
        document.getElementById('img-9').src = 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWxlcGhhbnR8ZW58MHx8MHx8fDA%3D';
    } else if(animalNumber === 5) {
        document.getElementById('button').innerHTML = 'Lion';
        document.getElementById('img-1').src = 'https://images.unsplash.com/photo-1504296854541-06ce8cbb8755?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        document.getElementById('img-2').src = 'https://plus.unsplash.com/premium_photo-1661919715011-d09ed2891471?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxpb258ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-3').src = 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpb258ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-4').src = 'https://images.unsplash.com/photo-1536478848964-3934cd9de097?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlvbmVzc3xlbnwwfHwwfHx8MA%3D%3D';
        document.getElementById('img-5').src = 'https://images.unsplash.com/photo-1631019553258-043d88ef767b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpb258ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-6').src = 'https://images.unsplash.com/photo-1619441187606-72ac1f242d7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxpb25lc3N8ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-7').src = 'https://images.unsplash.com/photo-1567602022905-3d85788b2e3c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpb258ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-8').src = 'https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxpb258ZW58MHx8MHx8fDA%3D';
        document.getElementById('img-9').src = 'https://images.unsplash.com/photo-1621138255090-a4897b4c00ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGxpb25lc3N8ZW58MHx8MHx8fDA%3D';
    }
};


document.getElementById('button').onclick = changeAnimal;