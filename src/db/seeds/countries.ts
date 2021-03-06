import { countries as table } from '../../config/db'
import { values }             from '../../modules/utils/object'


const name    = table.name
const cols    = values( table.cols )
const records = [
  { id: 'AND', name_ja: 'アンドラ公国', name_en: 'ANDORRA' },
  { id: 'ARE', name_ja: 'アラブ首長国連邦', name_en: 'UNITED ARAB EMIRATES' },
  { id: 'AFG', name_ja: 'アフガニスタン・イスラム国', name_en: 'AFGHANISTAN' },
  { id: 'ATG', name_ja: 'アンチグア・バーブーダ', name_en: 'ANTIGUA AND BARBUDA' },
  { id: 'AIA', name_ja: 'アンギラ', name_en: 'ANGUILLA' },
  { id: 'ALB', name_ja: 'アルバニア共和国', name_en: 'ALBANIA' },
  { id: 'ARM', name_ja: 'アルメニア共和国', name_en: 'ARMENIA' },
  { id: 'ANT', name_ja: 'オランダ領アンチル', name_en: 'NETHERLANDS ANTILLES' },
  { id: 'AGO', name_ja: 'アンゴラ共和国', name_en: 'ANGOLA' },
  { id: 'ATA', name_ja: '南極', name_en: 'ANTARCTICA' },
  { id: 'ARG', name_ja: 'アルゼンチン共和国', name_en: 'ARGENTINA' },
  { id: 'ASM', name_ja: '米領サモア', name_en: 'AMERICAN SAMOA' },
  { id: 'AUT', name_ja: 'オーストリア共和国', name_en: 'AUSTRIA' },
  { id: 'AUS', name_ja: 'オーストラリア', name_en: 'AUSTRALIA' },
  { id: 'ABW', name_ja: 'アルバ', name_en: 'ARUBA' },
  { id: 'AZE', name_ja: 'アゼルバイジャン共和国', name_en: 'AZERBAIJAN' },
  { id: 'BIH', name_ja: '(ボスニア・ヘルツェゴビナ共和国)', name_en: 'BOSNIA AND HERZEGOVINA' },
  { id: 'BRB', name_ja: 'バルバドス', name_en: 'BARBADOS' },
  { id: 'BGD', name_ja: 'バングラデシュ人民共和国', name_en: 'BANGLADESH' },
  { id: 'BEL', name_ja: 'ベルギー王国', name_en: 'BELGIUM' },
  { id: 'BFA', name_ja: 'ブルキナファソ', name_en: 'BURKINA FASO' },
  { id: 'BGR', name_ja: 'ブルガリア共和国', name_en: 'BULGARIA' },
  { id: 'BHR', name_ja: 'バーレーン国', name_en: 'BAHRAIN' },
  { id: 'BDI', name_ja: 'ブルンジ共和国', name_en: 'BURUNDI' },
  { id: 'BEN', name_ja: 'ベナン共和国', name_en: 'BENIN' },
  { id: 'BMU', name_ja: 'バーミューダ諸島', name_en: 'BERMUDA' },
  { id: 'BRN', name_ja: 'ブルネイ・ダルサラーム国', name_en: 'BRUNEI DARUSSALAM' },
  { id: 'BOL', name_ja: 'ボリビア共和国', name_en: 'BOLIVIA' },
  { id: 'BRA', name_ja: 'ブラジル連邦共和国', name_en: 'BRAZIL' },
  { id: 'BHS', name_ja: 'バハマ国', name_en: 'BAHAMAS' },
  { id: 'BTN', name_ja: 'ブータン王国', name_en: 'BHUTAN' },
  { id: 'BVT', name_ja: 'ブーベ島', name_en: 'BOUVET ISLAND' },
  { id: 'BWA', name_ja: 'ボツワナ共和国', name_en: 'BOTSWANA' },
  { id: 'BLR', name_ja: 'ベラルーシ共和国', name_en: 'BELARUS' },
  { id: 'BLZ', name_ja: 'ベリーズ', name_en: 'BELIZE' },
  { id: 'CAN', name_ja: 'カナダ', name_en: 'CANADA' },
  { id: 'CCK', name_ja: 'ココス諸島', name_en: 'COCOS (KEELING) ISLANDS' },
  { id: 'CAF', name_ja: '中央アフリカ共和国', name_en: 'CENTRAL AFRICAN REPUBLIC' },
  { id: 'COG', name_ja: 'コンゴ共和国', name_en: 'CONGO' },
  { id: 'CHE', name_ja: 'スイス連邦', name_en: 'SWITZERLAND' },
  { id: 'CIV', name_ja: 'コートジボアール共和国', name_en: 'COTE D IVOIRE' },
  { id: 'COK', name_ja: 'クック諸島', name_en: 'COOK ISLANDS' },
  { id: 'CHL', name_ja: 'チリ共和国', name_en: 'CHILE' },
  { id: 'CMR', name_ja: 'カメルーン共和国', name_en: 'CAMEROON' },
  { id: 'CHN', name_ja: '中華人民共和国', name_en: 'CHINA' },
  { id: 'COL', name_ja: 'コロンビア共和国', name_en: 'COLOMBIA' },
  { id: 'CRI', name_ja: 'コスタリカ共和国', name_en: 'COSTA RICA' },
  { id: 'CUB', name_ja: 'キューバ共和国', name_en: 'CUBA' },
  { id: 'CPV', name_ja: 'カーボベルデ共和国', name_en: 'CAPE VERDE' },
  { id: 'CXR', name_ja: 'クリスマス島', name_en: 'CHRISTMAS ISLAND' },
  { id: 'CYP', name_ja: 'キプロス共和国', name_en: 'CYPRUS' },
  { id: 'CZE', name_ja: 'チェコ共和国', name_en: 'CZECH REPUBLIC' },
  { id: 'DEU', name_ja: 'ドイツ連邦共和国', name_en: 'GERMANY' },
  { id: 'DJI', name_ja: 'ジブチ共和国', name_en: 'DJIBOUTI' },
  { id: 'DNK', name_ja: 'デンマーク王国', name_en: 'DENMARK' },
  { id: 'DMA', name_ja: 'ドミニカ国', name_en: 'DOMINICA' },
  { id: 'DOM', name_ja: 'ドミニカ共和国', name_en: 'DOMINICAN REPUBLIC' },
  { id: 'DZA', name_ja: 'アルジェリア民主人民共和国', name_en: 'ALGERIA' },
  { id: 'ECU', name_ja: 'エクアドル共和国', name_en: 'ECUADOR' },
  { id: 'EST', name_ja: 'エストニア共和国', name_en: 'ESTONIA' },
  { id: 'EGY', name_ja: 'エジプト・アラブ共和国', name_en: 'EGYPT' },
  { id: 'ESH', name_ja: '西サハラ', name_en: 'WESTERN SAHARA' },
  { id: 'ERI', name_ja: 'エリトリア', name_en: 'ERITREA' },
  { id: 'ESP', name_ja: 'スペイン', name_en: 'SPAIN' },
  { id: 'ETH', name_ja: 'エチオピア', name_en: 'ETHIOPIA' },
  { id: 'FIN', name_ja: 'フィンランド共和国', name_en: 'FINLAND' },
  { id: 'FJI', name_ja: 'フィジー共和国', name_en: 'FIJI' },
  { id: 'FLK', name_ja: 'フォークランド(マルビナス)諸島', name_en: 'FALKLAND ISLAND (MALVINAS)' },
  { id: 'FSM', name_ja: 'ミクロネシア連邦', name_en: 'MICRONESIA (FEDERATED STATES OF)' },
  { id: 'FRO', name_ja: 'フェロー諸島', name_en: 'FAROE ISLANDS' },
  { id: 'FRA', name_ja: 'フランス共和国', name_en: 'FRANCE' },
  { id: 'FXX', name_ja: 'フランス本国', name_en: 'FRANCE, METROPOLITAN' },
  { id: 'GAB', name_ja: 'ガボン共和国', name_en: 'GABON' },
  { id: 'GBR', name_ja: 'グレートブリテン及び北部アイルランド連合王国(英国)', name_en: 'UNITED KINGDOM' },
  { id: 'GRD', name_ja: 'グレナダ', name_en: 'GRENADA' },
  { id: 'GEO', name_ja: 'グルジア共和国', name_en: 'GEORGIA' },
  { id: 'GUF', name_ja: '仏領ギアナ', name_en: 'FRENCH GUIANA' },
  { id: 'GHA', name_ja: 'ガーナ共和国', name_en: 'GHANA' },
  { id: 'GIB', name_ja: 'ジブラルタル', name_en: 'GIBRALTAR' },
  { id: 'GRL', name_ja: 'グリーンランド', name_en: 'GREENLAND' },
  { id: 'GMB', name_ja: 'ガンビア共和国', name_en: 'GAMBIA' },
  { id: 'GIN', name_ja: 'ギニア共和国', name_en: 'GUINEA' },
  { id: 'GLP', name_ja: 'グアドループ島', name_en: 'GUADELOUPE' },
  { id: 'GNQ', name_ja: '赤道ギニア共和国', name_en: 'EQUATORIAL GUINEA' },
  { id: 'GRC', name_ja: 'ギリシア共和国', name_en: 'GREECE' },
  { id: 'SGS', name_ja: '南ジョージア島・南サンドイッチ諸島', name_en: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS' },
  { id: 'GTM', name_ja: 'グアテマラ共和国', name_en: 'GUATEMALA' },
  { id: 'GUM', name_ja: 'グアム', name_en: 'GUAM' },
  { id: 'GNB', name_ja: 'ギニアビサオ共和国', name_en: 'GUINEA-BISSAU' },
  { id: 'GUY', name_ja: 'ガイアナ協同共和国', name_en: 'GUYANA' },
  { id: 'HKG', name_ja: 'ホンコン (香港)', name_en: 'HONG KONG' },
  { id: 'HMD', name_ja: 'ヘアド島・マクドナルド諸島', name_en: 'HEARD ISLAND AND MCDONALD ISLANDS' },
  { id: 'HND', name_ja: 'ホンジュラス共和国', name_en: 'HONDURAS' },
  { id: 'HRV', name_ja: 'クロアチア共和国', name_en: 'CROATIA' },
  { id: 'HTI', name_ja: 'ハイチ共和国', name_en: 'HAITI' },
  { id: 'HUN', name_ja: 'ハンガリー共和国', name_en: 'HUNGARY' },
  { id: 'IDN', name_ja: 'インドネシア共和国', name_en: 'INDONESIA' },
  { id: 'IRL', name_ja: 'アイルランド', name_en: 'IrelAND' },
  { id: 'ISR', name_ja: 'イスラエル国', name_en: 'ISRAEL' },
  { id: 'IND', name_ja: 'インド', name_en: 'INDIA' },
  { id: 'IOT', name_ja: '英領インド洋地域', name_en: 'BRITISH INDIAN OCEAN TERRITORY' },
  { id: 'IRQ', name_ja: 'イラク共和国', name_en: 'IRAQ' },
  { id: 'IRN', name_ja: 'イラン・イスラム共和国', name_en: 'IRAN (ISLAMIC REPUBLIC OF)' },
  { id: 'ISL', name_ja: 'アイスランド共和国', name_en: 'ICELAND' },
  { id: 'ITA', name_ja: 'イタリア共和国', name_en: 'ITALY' },
  { id: 'JAM', name_ja: 'ジャマイカ', name_en: 'JAMAICA' },
  { id: 'JOR', name_ja: 'ヨルダン・ハシミテ王国', name_en: 'JORDAN' },
  { id: 'JPN', name_ja: '日本国', name_en: 'JAPAN' },
  { id: 'KEN', name_ja: 'ケニア共和国', name_en: 'KENYA' },
  { id: 'KGZ', name_ja: 'キルギスタン共和国', name_en: 'KYRGYZSTAN' },
  { id: 'KHM', name_ja: 'カンボディア王国', name_en: 'CAMBODIA' },
  { id: 'KIR', name_ja: 'キリバス共和国', name_en: 'KIRIBATI' },
  { id: 'COM', name_ja: 'コモロ・イスラム連邦共和国', name_en: 'COMOROS' },
  { id: 'KNA', name_ja: 'セントクリストファー・ネイビス', name_en: 'SAINT KITTS AND NEVIS' },
  { id: 'PRK', name_ja: '(北朝鮮=朝鮮民主主義人民共和国)', name_en: 'KOREA, DEMOCRATIC PEOPLE S REPUBLIC OF' },
  { id: 'KOR', name_ja: '大韓民国', name_en: 'KOREA, REPUBLIC OF' },
  { id: 'KWT', name_ja: 'クウェート国', name_en: 'KUWAIT' },
  { id: 'CYM', name_ja: 'ケイマン諸島', name_en: 'CAYMAN ISLANDS' },
  { id: 'KAZ', name_ja: 'カザフスタン共和国', name_en: 'KAZAKHSTAN' },
  { id: 'LAO', name_ja: 'ラオス人民民主共和国', name_en: 'LAO PEOPLE S DEMOCRATIC REPUBLIC' },
  { id: 'LBN', name_ja: 'レバノン共和国', name_en: 'LEBANON' },
  { id: 'LCA', name_ja: 'セントルシア', name_en: 'SAINT LUCIA' },
  { id: 'LIE', name_ja: 'リヒテンシュタイン公国', name_en: 'LIECHTENSTEIN' },
  { id: 'LKA', name_ja: 'スリランカ民主社会主義共和国', name_en: 'SRI LANKA' },
  { id: 'LBR', name_ja: 'リベリア共和国', name_en: 'LIBERIA' },
  { id: 'LSO', name_ja: 'レソト王国', name_en: 'LESOTHO' },
  { id: 'LTU', name_ja: 'リトアニア共和国', name_en: 'LITHUANIA' },
  { id: 'LUX', name_ja: 'ルクセンブルク大公国', name_en: 'LUXEMBOURG' },
  { id: 'LVA', name_ja: 'ラトビア共和国', name_en: 'LATVIA' },
  { id: 'LBY', name_ja: '社会主義人民リビア・アラブ国', name_en: 'LIBYAN ARAB JAMAHIRIYA' },
  { id: 'MAR', name_ja: 'モロッコ王国', name_en: 'MOROCCO' },
  { id: 'MCO', name_ja: 'モナコ公国', name_en: 'MONACO' },
  { id: 'MDA', name_ja: 'モルドバ共和国', name_en: 'MOLDOVA, REPUBLIC OF' },
  { id: 'MDG', name_ja: 'マダガスカル共和国', name_en: 'MADAGASCAR' },
  { id: 'MHL', name_ja: 'マーシャル諸島共和国', name_en: 'MARSHALL ISLANDS' },
  { id: 'MLI', name_ja: 'マリ共和国', name_en: 'MALI' },
  { id: 'MMR', name_ja: 'ミャンマー連邦', name_en: 'MYANMAR' },
  { id: 'MNG', name_ja: 'モンゴル国', name_en: 'MONGOLIA' },
  { id: 'MAC', name_ja: 'マカオ(澳門)', name_en: 'MACAU' },
  { id: 'MNP', name_ja: '北マリアナ諸島', name_en: 'NORTHERN MARIANA ISLANDS' },
  { id: 'MTQ', name_ja: 'マルチニーク島', name_en: 'MARTINIQUE' },
  { id: 'MRT', name_ja: 'モーリタニア・イスラム共和国', name_en: 'MAURITANIA' },
  { id: 'MSR', name_ja: 'モントセラト', name_en: 'MONTSERRAT' },
  { id: 'MLT', name_ja: 'マルタ共和国', name_en: 'MALTA' },
  { id: 'MUS', name_ja: 'モーリシャス共和国', name_en: 'MAURITIUS' },
  { id: 'MDV', name_ja: 'モルジブ共和国', name_en: 'MALDIVES' },
  { id: 'MWI', name_ja: 'マラウイ共和国', name_en: 'MALAWI' },
  { id: 'MEX', name_ja: 'メキシコ合衆国', name_en: 'MEXICO' },
  { id: 'MYS', name_ja: 'マレーシア', name_en: 'MALAYSIA' },
  { id: 'MOZ', name_ja: 'モザンビーク共和国', name_en: 'MOZAMBIQUE' },
  { id: 'NAM', name_ja: 'ナミビア共和国', name_en: 'NAMIBIA' },
  { id: 'NCL', name_ja: 'ニューカレドニア', name_en: 'NEW CALEDONIA' },
  { id: 'NER', name_ja: 'ニジェール共和国', name_en: 'NIGER' },
  { id: 'NFK', name_ja: 'ノーフォーク島', name_en: 'NORFOLK ISLAND' },
  { id: 'NGA', name_ja: 'ナイジェリア連邦共和国', name_en: 'NIGERIA' },
  { id: 'NIC', name_ja: 'ニカラグア共和国', name_en: 'NICARAGUA' },
  { id: 'NLD', name_ja: 'オランダ王国', name_en: 'NETHERLANDS' },
  { id: 'NOR', name_ja: 'ノルウェー王国', name_en: 'NORWAY' },
  { id: 'NPL', name_ja: 'ネパール王国', name_en: 'NEPAL' },
  { id: 'NRU', name_ja: 'ナウル共和国', name_en: 'NAURU' },
  { id: 'NIU', name_ja: 'ニウエ', name_en: 'NIUE' },
  { id: 'NZL', name_ja: 'ニュージーランド', name_en: 'NEW ZEALAND' },
  { id: 'OMN', name_ja: 'オマーン国', name_en: 'OMAN' },
  { id: 'PAN', name_ja: 'パナマ共和国', name_en: 'PANAMA' },
  { id: 'PER', name_ja: 'ペルー共和国', name_en: 'PERU' },
  { id: 'PYF', name_ja: '仏領ポリネシア', name_en: 'FRENCH POLYNESIA' },
  { id: 'PNG', name_ja: 'パプアニューギニア', name_en: 'PAPUA NEW GUINEA' },
  { id: 'PHL', name_ja: 'フィリピン共和国', name_en: 'PHILIPPINES' },
  { id: 'PAK', name_ja: 'パキスタン・イスラム共和国', name_en: 'PAKISTAN' },
  { id: 'POL', name_ja: 'ポーランド共和国', name_en: 'POLAND' },
  { id: 'SPM', name_ja: 'サンピエール島・ミクロン島', name_en: 'SAINT PIERRE AND MIQUELON' },
  { id: 'PCN', name_ja: 'ピトケアン島', name_en: 'PITCAIRN' },
  { id: 'PRI', name_ja: 'プエルトリコ', name_en: 'PUERTO RICO' },
  { id: 'PRT', name_ja: 'ポルトガル共和国', name_en: 'PORTUGAL' },
  { id: 'PLW', name_ja: 'パラオ', name_en: 'PALAU' },
  { id: 'PRY', name_ja: 'パラグアイ共和国', name_en: 'PARAGUAY' },
  { id: 'QAT', name_ja: 'カタール国', name_en: 'QATAR' },
  { id: 'REU', name_ja: 'レユニオン', name_en: 'REUNION' },
  { id: 'ROM', name_ja: 'ルーマニア', name_en: 'ROMANIA' },
  { id: 'RUS', name_ja: 'ロシア連邦', name_en: 'RUSSIAN FEDERATION' },
  { id: 'RWA', name_ja: 'ルワンダ共和国', name_en: 'RWANDA' },
  { id: 'SAU', name_ja: 'サウジアラビア王国', name_en: 'SAUDI ARABIA' },
  { id: 'SLB', name_ja: 'ソロモン諸島', name_en: 'SOLOMON ISLANDS' },
  { id: 'SYC', name_ja: 'セイシェル共和国', name_en: 'SEYCHELLES' },
  { id: 'SDN', name_ja: 'スーダン共和国', name_en: 'SUDAN' },
  { id: 'SWE', name_ja: 'スウェーデン王国', name_en: 'SWEDEN' },
  { id: 'SGP', name_ja: 'シンガポール共和国', name_en: 'SINGAPORE' },
  { id: 'SHN', name_ja: 'セントヘレナ島', name_en: 'SAINT HELENA' },
  { id: 'SVN', name_ja: 'スロベニア共和国', name_en: 'SLOVENIA' },
  { id: 'SJM', name_ja: 'スバールバル諸島・ヤンマイエン島', name_en: 'SVALBARD AND JAN MAYEN' },
  { id: 'SVK', name_ja: 'スロバキア共和国', name_en: 'SLOVAKIA' },
  { id: 'SLE', name_ja: 'シエラレオネ共和国', name_en: 'SIERRA LEONE' },
  { id: 'SMR', name_ja: 'サンマリノ共和国', name_en: 'SAN MARINO' },
  { id: 'SEN', name_ja: 'セネガル共和国', name_en: 'SENEGAL' },
  { id: 'SOM', name_ja: 'ソマリア民主共和国', name_en: 'SOMALIA' },
  { id: 'SUR', name_ja: 'スリナム共和国', name_en: 'SURINAME' },
  { id: 'STP', name_ja: 'サントメ・プリンシペ民主共和国', name_en: 'SAO TOME AND PRINCIPE' },
  { id: 'SLV', name_ja: 'エルサルバドル共和国', name_en: 'EL SALVADOR' },
  { id: 'SYR', name_ja: 'シリア・アラブ共和国', name_en: 'SYRIAN ARAB REPUBLIC' },
  { id: 'SWZ', name_ja: 'スワジランド王国', name_en: 'SWAZILAND' },
  { id: 'TCA', name_ja: 'タークス諸島・カイコス諸島', name_en: 'TURKS AND CAICOS ISLANDS' },
  { id: 'TCD', name_ja: 'チャド共和国', name_en: 'CHAD' },
  { id: 'ATF', name_ja: '仏領極南諸島', name_en: 'FRENCH SOUTHERN TERRITORIES' },
  { id: 'TGO', name_ja: 'トーゴ共和国', name_en: 'TOGO' },
  { id: 'THA', name_ja: 'タイ王国', name_en: 'THAILAND' },
  { id: 'TJK', name_ja: 'タジキスタン共和国', name_en: 'TAJIKISTAN' },
  { id: 'TKL', name_ja: 'トケラウ諸島', name_en: 'TOKELAU' },
  { id: 'TKM', name_ja: 'トルクメニスタン', name_en: 'TURKMENISTAN' },
  { id: 'TUN', name_ja: 'チュニジア共和国', name_en: 'TUNISIA' },
  { id: 'TON', name_ja: 'トンガ王国', name_en: 'TONGA' },
  { id: 'TMP', name_ja: '東チモール', name_en: 'EAST TIMOR' },
  { id: 'TUR', name_ja: 'トルコ共和国', name_en: 'TURKEY' },
  { id: 'TTO', name_ja: 'トリニダード・トバゴ共和国', name_en: 'TRINIDAD AND TOBAGO' },
  { id: 'TUV', name_ja: 'ツバル', name_en: 'TUVALU' },
  { id: 'TWN', name_ja: '台湾', name_en: 'TAIWAN, PROVINCE OF CHINA' },
  { id: 'TZA', name_ja: 'タンザニア連合共和国', name_en: 'TANZANIA, UNITED REPUBLIC OF' },
  { id: 'UKR', name_ja: 'ウクライナ', name_en: 'UKRAINE' },
  { id: 'UGA', name_ja: 'ウガンダ共和国', name_en: 'UGANDA' },
  { id: 'UMI', name_ja: '米領太平洋諸島', name_en: 'UNITED STATES MINOR OUTLYING ISLANDS' },
  { id: 'USA', name_ja: 'アメリカ合衆国(米国)', name_en: 'UNITED STATES' },
  { id: 'URY', name_ja: 'ウルグアイ東方共和国', name_en: 'URUGUAY' },
  { id: 'UZB', name_ja: 'ウズベキスタン共和国', name_en: 'UZBEKISTAN' },
  { id: 'VAT', name_ja: 'バチカン市国', name_en: 'VATICAN CITY STATE (HOLY SEE)' },
  { id: 'VCT', name_ja: 'セントビンセント及びグレナディーン諸島', name_en: 'SAINT VINCENT AND THE GRENADINES' },
  { id: 'VEN', name_ja: 'ベネズエラ共和国', name_en: 'VENEZUELA' },
  { id: 'VGB', name_ja: '英領バージン諸島', name_en: 'VIRGIN ISLANDS (BRITISH )' },
  { id: 'VIR', name_ja: '米領バージン諸島', name_en: 'VIRGIN ISLANDS (U.S.)' },
  { id: 'VNM', name_ja: 'ベトナム社会主義共和国', name_en: 'VIET NAM' },
  { id: 'VUT', name_ja: 'バヌアツ共和国', name_en: 'VANUATU' },
  { id: 'WLF', name_ja: 'ワリス・フテュナ諸島', name_en: 'WALLIS AND FUTUNA ISLANDS' },
  { id: 'WSM', name_ja: '西サモア', name_en: 'SAMOA' },
  { id: 'YEM', name_ja: 'イエメン共和国', name_en: 'YEMEN' },
  { id: 'MYT', name_ja: 'マイヨット島', name_en: 'MAYOTTE' },
  { id: 'YUG', name_ja: '(ユーゴスラビア連邦共和国)', name_en: 'YUGOSLAVIA' },
  { id: 'ZAF', name_ja: '南アフリカ共和国', name_en: 'SOUTH AFRICA' },
  { id: 'ZMB', name_ja: 'ザンビア共和国', name_en: 'ZAMBIA' },
  { id: 'ZAR', name_ja: 'ザイール共和国', name_en: 'ZAIRE' },
  { id: 'ZWE', name_ja: 'ジンバブエ共和国', name_en: 'ZIMBABWE' },
]


export const context = {
  name,
  cols,
  records
}
