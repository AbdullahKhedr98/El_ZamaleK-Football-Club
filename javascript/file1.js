
alert("مرحباً بكم في النادي الملكي :)");

do {
    var msgValue = prompt("ما هو فريقك المفضل ؟", "   من فضلك ادخل كلمة 'الاهلي' أو 'الزمالك'");

    if (msgValue == "الزمالك") {

        alert("  انت مرحب بك هنا دائما ");
        break;

    } else if (msgValue == "الاهلي") {

        alert("  انت مرحب بك هنا ولكن ليس لفتره طويله ");
        break;

    } else {

        alert("    من فضلك ادخل كلمة 'الاهلي' أو 'الزمالك' ");


    }
} while (prompt != 'الزمالك' || prompt != 'الاهلي');






