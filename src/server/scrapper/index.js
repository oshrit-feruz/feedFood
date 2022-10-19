const Scrapper = require("./scrapper");

let resNamesAsian = [
  "טייגר לילי שרונה מרקט",
  "אינדי שוק צפון",
  "פוקי ואן רחובות",
  "טייגר לילי רמת החייל",
  "ווק טו ווק נחלת בנימין תל אביב",
  "בית תאילנדי תל אביב",
  "באו באו תל אביב",
  "נינג תאי פוד קינג ג'ורג'",
  "ווק טו ווק הרצליה",
  "פוקי בודהה בול תל אביב",
  "גרילה פתח תקווה",
  "טייק א ווק ירושלים",
  "איסאן תל אביב",
  "מידו קיטשן תל אביב",
  "ג'אפו אור יהודה",
  "פוקי בר ראשון לציון",
  "טרנזיט רחובות",
  "וונג תל אביב",
  "נמסטה אשדוד",
  "פוקי & סלט סטיישן רמת גן",
  "דים סאם שופ דיזינגוף תל אביב",
  "מיאזאקי",
];
let resNamesMeat = [
  "שניצלס רעננה",
  'קרנף אבן גבירול ת"א',
  "מפגש גרונר רמת גן",
  "פנינת השווארמה תל אביב",
  "טורטיה בר ראשון לציון",
  "דוקו טוסט נקניק לוד",
  "שקשוקה אקספרס חולון",
  "פיקניק FOOD נתניה",
  "ברוסטר צ'יקן מערב ראשון לציון",
  "ערושה ישראלית תל אביב אבן גבירול",
  "עלינא בפיתה ראשון לציון",
  'מיט קיצ"ן תל אביב',
  "מתחת לעץ תל אביב",
  "הפרלמנט ראשון לציון",
  "פיתה דיזנגוף תל אביב",
  "פיתה רחוב רמת גן",
  "מרגז טוסט נקניק משלוחים",
  "שווארמה פאשה אשדוד",
  "פיתה רחוב פתח תקווה",
  "בדוס בני ברק",
  "מנפיס גבעת זאב",
  'מאנצ"טוסט תל אביב',
  "טורוס טוסט נקניק תל אביב",
  "ג'רו אור יהודה",
  "טורטיה בר אזור",
  "עראיס מחניודה תל אביב",
  "פיתה רחוב אשדוד",
  "שניצל פקטורי אשדוד",
  "סחבק טוסט נקניק רחובות",
  "מקסיקני אשקלון",
];
let resNamesMediterranean = [
  "חומוס אליהו כפר סבא",
  "גרקו תל אביב",
  "אל קלחה יאפא",
  "גריל בר התאומים חולון",
  "נפגשים אצל אסי בחומוסייה",
  "בריאלה תל אביב",
  "פיתה ביד חולון",
  "חומוס אליהו דיזנגוף סנטר תל אביב",
  "באגט ניר ראשון לציון",
  "שווארמה פאשה אשקלון",
  "אליקוס אשקלון",
  "חומוס אליהו קניון הדר ירושלים",
  "שנקר בשרים חולון",
  "פלאפל בריבוע ראש העין",
  "חומוס אליהו מישור אדומים",
  "TRIO טריו סלטים תל אביב",
  "שווארמה אלמז תל אביב",
  "השווארמה של שהרבני תל אביב",
  "חומוס עזריאלי אשקלון",
  "מדאמס חומוס גבעת שמואל",
  "שף על האש נתניה",
  "חומוס אליהו נתיבות",
  "חומוס גבעתיים קניון גבעתיים",
  "חומוס אליהו פלורנטין תל אביב",
  "ביס בפיתה בת ים",
  "חומוס אליהו מודיעין עילית כשר",
  "חומוס המשורר תל אביב",
  "חומוס אליהו באר טוביה",
  "לה פפריקה רמת גן",
  "חומוס כספי נאות אפקה",
];
let resNamesMexicani = [
  "המקסיקני אשקלון",
  "פרד דיינר ראש העין",
  "רד מיט ראשון לציון",
  `באצ'יס רול מקסיקני Bachi's`,
  "ברוסטר צ'יקן מודיעין",
  "מקסיקנה גריל גלילות (סינמה סיטי)",
  "רויה רול בר קרית גת",
  "מקסיקנה גריל ראשון לציון (סינמה סיטי)",
  "טורוס אנטריקוט בורגר תל אביב",
  "הבורגנים מודיעין מוריה",
  "מוצ'אצ'וס נס ציונה",
  "קרנף רמת השרון",
  'קרנף אבן גבירול ת"א',
  "השפית ממקסיקו נתניה",
  "טורטיה בר ראשון לציון",
  "Noon נון פתח תקווה",
  "פוקי בול הרצליה",
  "גריל נייט רמת גן",
  "סודוקו ביסטרו בר הרצליה",
  "טורטיוס באור יהודה",
  "מקסיקנה פתח תקווה - כשר",
  "מיט סטופ רמת גן",
  "טורטייה מקסיקנית איכותית בהוד השרון",
  "מקסיקנה רחובות - כשר",
  "רד מיט ראש העין",
  "רפידוס נתניה",
  "מקסיקנה גריל שוק צפון - כשר",
  "מיסטר קורן מודיעין",
  "באפלו כפר סבא",
  "רד מיט בוגרשוב - כשר",
];
let resNamesItalian = [
  "פיצה בולונאט רחובות",
  "גוצ'ה דיזינגוף תל אביב",
  "אמריקן פיצה רמת גן",
  "פיצה אדסו יבנה",
  "סזאר ביסטרו בר",
  "קפה פולה ראשון לציון",
  "פיצה רמת חן",
  "בנדיקט שרונה מרקט",
  "פיצה מוצרלה בכפר תל אביב",
  "פיצה גראז' תל אביב",
  "Yummy pizza יאמי פיצה רחובות",
  "פיצה דון פאפא ראשון לציון",
  "פיצה בלה הוד השרון",
  "הסלטיה תל אביב",
  "בית הפנקייק המקורי נתניה",
  "פיצה רומא רמת גן",
  "פיצה כמעט חינם ראשון לציון",
  "פיצאסו אשקלון",
  "קריספי פיצה לוד",
  "קאסה דל פפה הרצליה",
  "מיסטיק פיצה ירושלים",
  "בר גוריון תל אביב",
  "פיצה עגבניה רמת אביב",
  "ג'ויה תל אביב",
  "פיצה זיתים תל אביב",
  "פומודורי פיצה אשדוד",
  "אלפרדו פתח תקווה",
  "פיצה פרמז'נו נס ציונה",
  "פרגו פיצה גבעת שמואל",
  "פיצה פושקה ירושלים קרית יובל",
];
let resNamesPizza = [
  "פיצה דל פינו",
  "אלפרדו פתח תקווה",
  "פיצה פור דה פיפל תל אביב",
  "פיצת השף ראשון לציון מערב",
  "פיצה בכיכר חולון",
  "ביג פיצה נתניה",
  "פיצה הוליווד חולון",
  "פיצה ג'וספה תל אביב",
  "פיצה עגבניה גבעתיים",
  'פרגו פיצה נאות אשלים ראשל"צ',
  "פיצה בית וגן ירושלים",
  "פרגו פיצה נתניה עיר ימים",
  "פיצה אמריקה ראשון לציון",
  "מסעדת פרליטה גדרה",
  "מאמא אנד פאפא ראש העין",
  "בוכמנס פיצה ירושלים",
  "בוכמנס פיצה מודיעין",
  "פסטה בסטה דיזנגוף תל אביב",
  "ארט פיצה תל אביב",
  "פיצה שירוקו תל אביב",
  "פידל בר רמת גן",
  "באלי פיצה תל אביב יפו",
  "פיצה פרמז'נו נס ציונה",
  "פיצה עגבניה בת ים",
  "אמריקן פיצה ראש העין",
  "פיצה אנד טורטיה תל אביב",
  "פיצה כמעט חינם גבעת שמואל",
  "איטליקה רמת גן",
  "בובה של פיצה הוד השרון",
  "פיצה רומי מודיעין",
];
let resNamesBurgers = [
  "פרה פרה גדרה",
  "בורגר סטיישן רמת גן",
  "אגאדיר צומת בני דרור",
  "עד העצם אקספרס ראשון לציון",
  "פאזל בורגר פתח תקווה - כשר",
  "בומבה בורגר רמת אפעל",
  "ג'יג'י ההבדל בטעם יבנה",
  "בורגרים גבעת שמואל",
  "Jack by Black ג'ק ביי בלאק ראשון לציון",
  "אגאדיר בסר הכשר",
  "בעל הבית רחובות",
  "סמאשבורגר תל אביב",
  "בלאק בורגר פתח תקווה הקניון הגדול",
  "פיראנה שף ראשון לציון",
  "בורגרים רמת אביב",
  "בורגרים גדרה",
  "פאזל בורגר חולון - כשר",
  "פאפא שוהם",
  "השפכטל של רחל",
  "באפלו כפר סבא",
  "קומל ראש העין טורטיה בר",
  "בורגרים אשדוד",
  "בלאק בורגר גבעתיים",
  "מייק בורגר נס ציונה",
  "המבורגר גורמה 26 תל אביב",
  "מוגס בורגר אזור",
  "אשתנור גריל ירושלים",
  "לה גרדיה גריל בר תל אביב",
  "הבורגנים קריית יובל ירושלים",
  "פרד דיינר ראש העין",
];
let resNamesSushi = [
  "הסושיה מיקדו",
  "ווק סטיישן ירושלים",
  "צ'ופ צ'ופ תל אביב",
  "קים קוי סושי בר רחובות",
  "סושי בר - רמת השרון",
  "נגיסה סושי לוד",
  "צ'וקה רחובות",
  "ווק אנד ווק קניון דרורים כשר",
  "אושי אושי כפר סבא",
  "צ'וקה תל אביב וייצמן",
  "SUNKISS סאנקיס ראשון לציון",
  "ג'אפן ג'אפן אריאל",
  "אלוהה",
  "ניני האצ'י תל אביב",
  "Frame פריים אורבן המסגר תל אביב",
  "סאי סושי בר רמת גן",
  "אצה קניון דרורים - כשר",
  "הונו HONO גבעת שמואל",
  "ריבר נודלס בר תל אביב",
  "וואסבי סושי אשדוד",
  "הסושיה בת ים",
  "אושי אושי מרום נווה רמת גן",
  "צ'וקה ראשון לציון - כשר",
  "קיטו קאטו תל אביב",
  "צ'וקה רעננה",
  "נ'ויה סושי קרית אונו",
  "סושי יוקו תל אביב",
  "אוניקו אסיאתית טבעונית מבית פריים סושי",
  "ג'אפו תל אביב",
  "Newshi ניושי אור יהודה",
];
let resNamesDessert = [
  "גולדה רחובות הרצל - כשר",
  "דלי קרים קרית עקרון",
  "סופט קוקיס שרונה מרקט",
  "גולדה נתיבות - כשר",
  "בן עמי ירושלים",
  "ג'ט לק אשדוד",
  "גולדה מזכרת בתיה - כשר",
  "עידן הפיצה תל אביב",
  "אלדו המושבה הגרמנית ירושלים",
  "גולדה בן יהודה",
  "גולדה אם הדרך",
  "אל כנאפה בוטיק קרית עקרון",
  "בוזה חשמונאים תל אביב",
  "לחם ושות' תל אביב",
  "יוגוס אשדוד",
  "טיבולי גלידה אשקלון",
  "Bliss גלידה בליס נתניה",
  "יאפה כנאפה השוק",
  "מיסטר דונאטס תל אביב",
  "כנאפה שינקין תל אביב",
  "קיורטוש בוגרשוב תל אביב",
  "מסעדת טאטי גבעתיים",
  "אולדיס פנקייק בר רעננה",
  "Pancake House TLV נמל תל אביב",
  "גולדה רחובות",
  "גולדה מבשרת ציון - כשר",
];
let resNames = [
  "סזאר ביסטרו בר",
  "Trumpkosher טראמפ כשר אשדוד",
  "ווק אנד ווק קניון דרורים כשר",
  "קובה גוטה הרצליה",
  "טקומי שוהם",
  "אושי אושי הוד השרון",
  "Frame פריים סושי בר רמת החייל",
  "צ'וקה הרצליה",
  "מסעדת פרליטה גדרה",
  "קפטן הוק תל אביב",
  "פלאנצ'ו וילה תל אביב",
  "אצה פתח תקווה - כשר למהדרין",
  "מאג'די כפר סבא",
  "קיטו קאטו תל אביב",
  "בנדיקט בן יהודה תל אביב",
  "ג'אפו אור יהודה",
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const pg_1 = require("pg");
const dotenv1 = require("dotenv");
dotenv1.config();
const DATABASE_URL_2 =
  "postgres://lnykjkghyjyjsz:6a9e887d780c76ccb3f0b73b2639cff9e74d1fd9fa7c5e992b5f8577a667c299@ec2-44-210-50-83.compute-1.amazonaws.com:5432/d6rinj1aqu5m4s";
let client = new pg_1.Client({
  connectionString: DATABASE_URL_2,
  ssl: {
    rejectUnauthorized: false,
  },
});
console.log("before conection");
client.connect();

console.log("after conection");
async function scrapAll() {
  for (let i = 0; i < resNames.length; i++) {
    console.log(resNames[i]);
    const dishes = await Scrapper.getDishes(resNames[i]);
    console.log("ok");
    for (let j = 0; j < 30; j++) {
      const dishData = dishes[j];
      let insertToDishes = `INSERT INTO dishes(dish,dish_desc,dish_img,restaurant_name,dish_price) VALUES ($1,$2,$3,$4,$5)`;
      // let dishValues = `(${dishData.name},${dishData.description},${dishData.image},${resNames[i]},${dishData.price});`;
      // let sql1 = insertToDishes + dishValues;
      // console.log(insertToDishes,[dishData.name,dishData.description,dishData.image,"gggg",dishData.price]);
      console.log(dishData);
      if (dishData) {
        await client.query(insertToDishes, [
          dishData.name,
          dishData.description,
          dishData.image,
          resNames[i],
          dishData.price,
        ]);
      }
    }
  }
}
scrapAll();
