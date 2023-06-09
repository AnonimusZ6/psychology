const express = require('express');
const expressHandlebars = require('express-handlebars');
const bodyparser = require('body-parser');
const app = express();

const urlencoded = bodyparser.urlencoded({extended: false});

const handlebars = expressHandlebars.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('index');
});


app.get('/tests', (req, res) => {
    res.render('indexTest', {
        layout: 'tests'
    });
});

app.post('/result', urlencoded, (req, res) => {
    let title;
    let descript;
    let paranoic = +req.body.rad1 + +req.body.rad14 + +req.body.rad27 + +req.body.rad40 + +req.body.rad53 + +req.body.rad66 + +req.body.rad79 + +req.body.rad92;
    let epilept = +req.body.rad2 + +req.body.rad15 + +req.body.rad28 + +req.body.rad41 + +req.body.rad54 + +req.body.rad57 + +req.body.rad80 + +req.body.rad93;
    let hypertem = +req.body.rad3 + +req.body.rad19 + +req.body.rad29 + +req.body.rad42 + +req.body.rad55 + +req.body.rad68 + +req.body.rad81 + +req.body.rad94;
    let isteroid = +req.body.rad4 + +req.body.rad17 + +req.body.rad30 + +req.body.rad43 + +req.body.rad56 + +req.body.rad69 + +req.body.rad82 + +req.body.rad95;
    let shizo = +req.body.rad5 + +req.body.rad18 + +req.body.rad31 + +req.body.rad44 + +req.body.rad57 + +req.body.rad70 + +req.body.rad83 + +req.body.rad96;
    let psycho = +req.body.rad6 + +req.body.rad19 + +req.body.rad32 + +req.body.rad45 + +req.body.rad58 + +req.body.rad71 + +req.body.rad84 + +req.body.rad97;
    let sensitive = +req.body.rad7 + +req.body.rad20 + +req.body.rad33 + +req.body.rad46 + +req.body.rad59 + +req.body.rad72 + +req.body.rad85 + +req.body.rad98;
    let hypotim = +req.body.rad8 + +req.body.rad21 + +req.body.rad34 + +req.body.rad47 + +req.body.rad60 + +req.body.rad73 + +req.body.rad86 + +req.body.rad99;
    let conform = +req.body.rad9 + +req.body.rad22 + +req.body.rad35 + +req.body.rad48 + +req.body.rad61 + +req.body.rad74 + +req.body.rad87 + +req.body.rad100;
    let unstate = +req.body.rad10 + +req.body.rad23 + +req.body.rad36 + +req.body.rad49 + +req.body.rad62 + +req.body.rad75 + +req.body.rad88 + +req.body.rad101;
    let astentic = +req.body.rad11 + +req.body.rad24 + +req.body.rad37 + +req.body.rad50 + +req.body.rad63 + +req.body.rad76 + +req.body.rad89 + +req.body.rad102;
    let lability = +req.body.rad12 + +req.body.rad25 + +req.body.rad38 + +req.body.rad51 + +req.body.rad64 + +req.body.rad77 + +req.body.rad90 + +req.body.rad103;
    let cycloid = +req.body.rad13 + +req.body.rad26 + +req.body.rad39 + +req.body.rad52 + +req.body.rad65 + +req.body.rad78 + +req.body.rad91 + +req.body.rad104;

    if (paranoic == 16) {
        title = "Вы - параноидальный тип!"
        descript = "Черты этого психотипа редко проявляются в детстве, но обычно такие дети сосредоточены на чем-то одном, серьезны, озабочены, о чем-то думают, стремятся во что бы то ни стало достичь желаемого (именно эта игрушка, именно эта книга и т. п.). Доминирующая черта характера: высокая степень целеустрем­ленности. Такой подросток подчиняет свою жизнь достижению определен­ной цели (причем достаточно большого масштаба), при этом он способен полностью пренебрегать интересами окружающих его людей (своих родителей, одноклассников и т. п.). Ради достижения постав­ленной цели он готов пожертвовать и своим благополучием, от­казаться от развлечений, комфорта и других обычных для детей радостей.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript,
        });
    } else if (epilept == 16) {
        title = "Вы - эпилептоидный тип!"
        descript = "С дошкольного возраста у детей, предрасположенных к данному типу акцентуации, замечается недетская бережливость одежды, своих игрушек, всего «своего», крайне злобная реакция на тех, кто пытается овладеть их собственностью, а с первых школьных лет проявляется мелочная скрупулезность и повышенная аккуратность.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (hypertem == 16) {
        title = "Вы - гипертимный тип!"
        descript = "Подростки, относящиеся к этому психотипу, с детства отличаются большой шумливостью, общительностью, даже смелостью, склонны к озорству. У них нет ни застенчивости, ни робости перед незнако­мыми людьми, однако им недостает чувства дистанции в отношении со взрослыми.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (isteroid == 16) {
        title = "Вы - истероидный тип!"
        descript = "Истероид виден с раннего детства. Милый малыш в центре ком­наты в присутствии большого количества взрослых незнакомых ему людей без всякого смущения декламирует стихи, пост незамысловатые песенки, демонстрируя и свои таланты, и свои наряды. Главное для него в этот момент — восхищение окружающих.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (shizo == 16) {
        title = "Вы - шизоидный тип!"
        descript = "С первых школьных лет такие дети любят играть одни, мало тянутся к одноклассникам, избегают шумных детских забав, предпочитая общество  старших ребят. В подростковом возрасте бросается в глаза прежде всего их замкнутость и отгороженность в сочетании с неумением сопереживать окружающим.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (psycho == 16) {
        title = "Вы - психастеноидный тип!"
        descript = "В детстве наряду с некоторой робостью и пугливостью у таких детей проявляются склонность к рассуждению и не по возрасту «интеллектуальные интересы». В этом же возрасте возникают раз­личные фобии — боязнь незнакомых людей, новых предметов, тем­ноты, страх остаться одному дома или за закрытой дверью и т.п.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (sensitive == 16) {
        title = "Вы - сензитивный тип!"
        descript = "С первых детских лет ребенок боязлив, боится одиночества, тем­ноты, животных, особенно собак. Избегает активных и шумливых сверстников. Но он достаточно общителен с теми, к кому уже привык, любит играть с малышами, чувствуя себя с ними уверенно и спокойно.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (hypotim == 16) {
        title = "Вы - гипотимный тип!"
        descript = "В детстве такой ребенок почти всегда вялый, живет без особых радостей, обижен на всех, и прежде всего на своих родителей. На лице часто выражение недовольства, расстройства из-за того, что не сделали так, как он хотел.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (conform == 16) {
        title = "Вы - конформный тип!"
        descript = "Этот тип характера встречается довольно часто. Ребенок согла­шается со всем, что ему предлагает ближайшее окружение, но стоит ему попасть под влияние другой группы, он изменяет отношение к тем же вещам на противоположное. Такой подросток как бы утра­чивает свое личностное отношение к миру, его суждения и оценки окружающего мира полностью совпадают с мнением тех людей, с которыми он общается в данный момент. Причем он не выделяется, не навязывает свое личное мнение, а просто представляет «массу», которая согласна с лидером.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (unstate == 16) {
        title = "Вы - неустойчивый тип!"
        descript = "С детства непослушны, непоседливы, всюду лезут, но при этом трусливы, боятся наказаний, легко подчиняются другим детям. Такой тип акцентуации характера формируется нередко у детей, которые перенесли травму мозга. Поэтому к ним нужен особенно тактичный подход.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (astentic == 16) {
        title = "Вы - астентичный тип!"
        descript = "С детства непослушны, непоседливы, всюду лезут, но при этом трусливы, боятся наказаний, легко подчиняются другим детям. Такой тип акцентуации характера формируется нередко у детей, которые перенесли травму мозга. Поэтому к ним нужен особенно тактичный подход.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (lability == 16) {
        title = "Вы - лабильный тип!"
        descript = "В детстве обычно не отличаются от сверстников, но часто про­стужаются, отсюда ангины и другие инфекционные заболевания. Способны погрузиться в мрачное настроение из-за нелестного слова, неприветливого взгляда, сломанной игрушки. Приятные слова, новый костюм или книга, хорошая новость могут поднять настроение, при­дать веселый тон разговору, но только до тех пор, пока очередная «неприятность» не испортит все.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else if (cycloid == 16) {
        title = "Вы - циклоидный тип!"
        descript = "В детстве мало чем отличается от своих сверстников, но иногда производит впечатление гипертима, т.е. периодами может быть не­обычно шумливым, озорным, постоянно что-то предпринимающим. А затем опять становится спокойным и управляемым ребенком. С началом пубертатного периода (половой зрелости) возникают пери­одические фазы смены настроения, длительность которых может быть от нескольких дней до недели и более.";
        res.render('result', {
            layout: 'tests',
            title: title,
            descript: descript
        });
    } else {
        title = "Извините, но похоже вы не совсем честно отвечали на вопрос, поэтому мы не можем опредилить ваш тип"
        res.render('result', {
            title: title
        });
    }
})


app.use(express.static(__dirname));
app.listen(80);