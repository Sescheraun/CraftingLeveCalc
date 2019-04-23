$( document ).ready(function() {

    let expPerLevel = [{}];
    let currentMaxLevel = 70;

    let exp = 0;
    let currLevel = 0;
    let targetLevel = 0;
    let leveValue = 0;


    $("#currExp").change(function(){

        exp = $(this).val();

        doTheMath();
    })

    $("#currLevel").change(function(){

        currLevel = $(this).val();

        if(currLevel >= currentMaxLevel) {
            currLevel = currentMaxLevel;
            $(this).val(currLevel);
        }

        doTheMath();
    })

    $("#targetLevel").change(function(){
        targetLevel = $(this).val();

        if(targetLevel >= currentMaxLevel){
            targetLevel = currentMaxLevel;
            $(this).val(targetLevel);
        }

        doTheMath();
    })

    $("#leveValue").change(function(){
        leveValue = $(this).val();

        doTheMath();
    })

    doTheMath = function(){
        console.log("doing the math");
    }

    //Data for levels and xp from 
    //https://ffxiv.consolegameswiki.com/wiki/Experience
    expPerLevel[1] = { level:300, running:300}
    expPerLevel[2] = { level:600, running:900}
    expPerLevel[3] = { level:1100, running:2000}
    expPerLevel[4] = { level:1700, running:3700}
    expPerLevel[5] = { level:2300, running:6000}
    expPerLevel[6] = { level:4200, running:10200}
    expPerLevel[7] = { level:6000, running:16200}
    expPerLevel[8] = { level:7350, running:23550}
    expPerLevel[9] = { level:9930, running:33480}
    expPerLevel[10] = { level:11800, running:45280}
    expPerLevel[11] = { level:15600, running:60880}
    expPerLevel[12] = { level:19600, running:80480}
    expPerLevel[13] = { level:23700, running:104180}
    expPerLevel[14] = { level:26400, running:130580}
    expPerLevel[15] = { level:30500, running:161080}
    expPerLevel[16] = { level:35400, running:196480}
    expPerLevel[17] = { level:40500, running:236980}
    expPerLevel[18] = { level:45700, running:282680}
    expPerLevel[19] = { level:51000, running:333680}
    expPerLevel[20] = { level:56600, running:390280}
    expPerLevel[21] = { level:63900, running:454180}
    expPerLevel[22] = { level:71400, running:525580}
    expPerLevel[23] = { level:79100, running:604680}
    expPerLevel[24] = { level:87100, running:691780}
    expPerLevel[25] = { level:95200, running:786980}
    expPerLevel[26] = { level:109800, running:896780}
    expPerLevel[27] = { level:124800, running:1021580}
    expPerLevel[28] = { level:140200, running:1161780}
    expPerLevel[29] = { level:155900, running:1317680}
    expPerLevel[30] = { level:162500, running:1480180}
    expPerLevel[31] = { level:175900, running:1656080}
    expPerLevel[32] = { level:189600, running:1845680}
    expPerLevel[33] = { level:203500, running:2049180}
    expPerLevel[34] = { level:217900, running:2267080}
    expPerLevel[35] = { level:232320, running:2499400}
    expPerLevel[36] = { level:249900, running:2749300}
    expPerLevel[37] = { level:267800, running:3017100}
    expPerLevel[38] = { level:286200, running:3303300}
    expPerLevel[39] = { level:304900, running:3608200}
    expPerLevel[40] = { level:324000, running:3932200}
    expPerLevel[41] = { level:340200, running:4272400}
    expPerLevel[42] = { level:356800, running:4629200}
    expPerLevel[43] = { level:373700, running:5002900}
    expPerLevel[44] = { level:390800, running:5393700}
    expPerLevel[45] = { level:408200, running:5801900}
    expPerLevel[46] = { level:437600, running:6239500}
    expPerLevel[47] = { level:467500, running:6707000}
    expPerLevel[48] = { level:498000, running:7205000}
    expPerLevel[49] = { level:529000, running:7734000}
    expPerLevel[50] = { level:864000, running:8598000}
    expPerLevel[51] = { level:1058400, running:9656400}
    expPerLevel[52] = { level:1267200, running:10922360}
    expPerLevel[53] = { level:1555200, running:12478800}
    expPerLevel[54] = { level:1872000, running:14350800}
    expPerLevel[55] = { level:2217600, running:16568400}
    expPerLevel[56] = { level:2592000, running:19160400}
    expPerLevel[57] = { level:2995200, running:22155600}
    expPerLevel[58] = { level:3427200, running:25582800}
    expPerLevel[59] = { level:3888000, running:29470800}
    expPerLevel[60] = { level:4470000, running:33940800}
    expPerLevel[61] = { level:4873000, running:38813800}
    expPerLevel[62] = { level:5316000, running:44129800}
    expPerLevel[63] = { level:5809000, running:49938800}
    expPerLevel[64] = { level:6364000, running:56302800}
    expPerLevel[65] = { level:6995000, running:63297800}
    expPerLevel[66] = { level:7722000, running:71019800}
    expPerLevel[67] = { level:8575000, running:79594800}
    expPerLevel[68] = { level:9593000, running:89187800}
    expPerLevel[69] = { level:10826000, running:100013800}
    
});