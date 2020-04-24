import React, { Fragment } from "react";
import words from "./defintions.js"

import Modal from "../Components/Modal/Modal.js";

//<p className="pages"> Mary had a little <Modal modal={words.lamb}/> </p>,

const Book = [0,
    <Fragment>
        <br /><br /><br />
        <h2 className="center mainPage"> Observations on the inhabitants, climate, soil, rivers, productions, animals, and other matters worthy of notice made by Mr. John Bartram, in his travels from Pensilvania [sic] to Onondago, Oswego and the Lake Ontario, in Canada: to which is annex'd a curious account of the cataracts at Niagara.</h2>
        <h3 className="center mainPage"> <br /> By Mr. Peter Kalm, A Swedifh Gentleman who travelled there.<br /> </h3>
    </Fragment>,
    <p className="pageText center">The 3<sup>d</sup> day of July 1743, I fet out from my houfe on Skuylkil River, with Lewis Evans, and travelled beyond Perkiomy Creek the firft day.<br /> <br />The weather was exceeding hot.</p>,
    <p className="pageText center">The 4<sup>th</sup>, we set out before day, and ftopp'd at Marcus Hulin's by Manatony; then croffed Skuylkil, and rode along the weft fide over rich bottoms, after which we afcended the Flying Hill, (fo called from the great number of wild Turkeys that ufed to fly from them to the plains) here we had a fine profpect of the Blue Mountains, and over the rich Vale of Tulpebocken; the defcent into which was fteep and ftony.<br /> <br />Through this vale we travelled weft, and by the way observed a large fpring 16 feet deep, and above 20 yards wide, which iffued out of a limestone rock, the ground above it pretty level, defending gradually towards the fpring which ran eaftward.<br /> <br />At at night we lodged at Conrad Weifers, who is the general Interpreter, and who went with us; his bufinefs was to fettle an affair with the Indians at Onondago.</p>,
    <p className="pageText center">The 5<sup>th</sup>, We croffed Tulpebocken Creek which runs eaft, and emptieth itfelf into the Skuylkil, and a little after a fmall branch of Swataro which runs Weft into Sufquehanah.<br /> <br />Thefe two large creeks receive moft of the water of that great rich vale between the Flying Hill and Tulpebocken Hill, from which the vale and creek receive their names, and is itfelf fo called from the Indian word fignifying a tortoife, unto which the natives of the country have conceived it bears fome fimilitude.<br /> <br />And thefe two hills are the fouthern boundary of this fine limeftone vale, many hundred miles long, and from 10 to 20 miles broad to the northern boundary formed by the Great Blue Mountains. Having called on a man who was to go with us and carry part of our provifions to Shamokin, he could not get his horfe fhod that day, but we rode to William Parfons's plantation, who received and entertained us very kindly; his houfe is about fix miles from the Blue Mountains.</p>,
    <p className="pageText center">The 6<sup>th</sup>, we fet forward and afcended the firft Blue ridge, from the top of which we made an obfervation, Conrad Weifers Hill bearing fouth 20 degrees eaft, the northern profpect to two gaps, thro' which we were to pafs to the North Hill, N. 30 deg. W. about 10 miles diftant. The top and fouth fide of this ridge is midling land, half a quarter of a mile broad, and produced fome wild grafs, abundance of <Modal modal={words.fern} />, <Modal modal={words.oak} />, and <Modal modal={words.chefnut} /> trees. Defcending the North fide we found it more poor, fteep and ftony, and come foon to the firft branch of Swataro which runs between the ridges, and is 3 miles from the next branch, all very poor land; but on this fecond branch, it is good low land, with large trees of 5 leaved <Modal modal={words.whitePine} />, <Modal modal={words.poplar} />, and <Modal modal={words.whiteOak} />, here we dined by a fpruce fwamp.<br /><br />After dinner we paffed the openings of two ridges, the laft of which was by the bank of the principal branch of Swataro, the foil poor and ftoney; then we afcended a great ridge about a mile fteep, and terribly ftoney moft of the way: near the top is a fine tho' fmall fpring of good water. At this place we were warned by a well known alarm to keep our diftance from an enranged rattle fnake that had put himfelf into a coiled pofture of defence, within a dozen yards of our path, but we punifhed his rage by ftriking him dead on the fpot: he had been highly irritated by an <Modal modal={words.indianDog} /> that barked eagerly at him, but was cunning enough to keep out of his reach, or nimble enough to avoid the fnake when he fprung at him. We took notice that while provoked, he contracted the mufcles of his cales fo as to appear very bright and fhining, but after the mortal ftroke, his fplendor became much diminifhed, this is likewife the cafe of many of our fnakes. The north fide of the Hill is not ftony as the fouth, but yet very poor. Thence we traveled 7 miles over feveral hollows, fwamps and fmall ridges, full of fcrubby bufhes, and ftill poor and ftoney to the laft great ridge, which is compofed chiefly of large gravel, as big as pidgeons or pullets eggs, and even the rocks feemed but heaps of the fame materials; the defcent on the north fide is very fteep and rocky, large craggy rocks are difpofed on all fides, moft part of the way down, which brought us to a fine vale, where we lodged by a creek called Saurel, and were grievoufly ftung all night with fmall gnats, fo that I flept very little.</p>,
    <p className="pageText center">The 7<sup>th</sup>, we let out weft from Saurel creek and traveled down the vale, which is pretty good land: and leaving the creek, foon croffed another runing along the north fide of the vale, by the bank of which we rode through a grove of white Pine, very lofty and fo clofe, that the Sun could hardly fhine through; at the end of this the two branches joined. Riding a little farther, we paffed through a gap of a moderate hill, north by the creek fide, where we found a fifhing place, moftly a deep hole near a rock ; there we went weft on the north fide of the creek, and dined at what is called the Double Eagle. The land hereabouts is middling white oak and <Modal modal={words.huckleberry} /> land, and by the creek fides pretty good wild graft, and the 2d branch enters about 30 rood below; having croffed this, we went up a vale of middling foil, covered with high oak Timber, nearly weft to the top of the hill, (moft of the way being a white clay under a fhallow furface), where we firft obferved the impreffion of fhells in fome of the loofe ftones, and from whence we had a fair profpect of the river Sufquehanah.<br /> <br />The defcent from hence foon brought us to Mohony, our lodging for this night. Here the foil is very good throughout the neck, formed by the river and the creek, which is about 3     poles wide. It rained this night through our old, tho’ newly erected lodging, which was an Indian Cabin that we took the liberty to remove, knowing they ufually leave behind them a good flock of fleas on the ground they inhabit; however, the wet deprived me of my reft that I had taken fo much pains to fecure againft the vermin.</p>,
    <p className="pageText center">July 8. We croffed the creek and rode along a rich bottom near the river for two miles, producing moft kinds of our foreft trees, and a large fpecies of <Modal modal={words.scuteleria} /> two feet high: thence along the river fide, near a mile N. 20 deg. E. to the foot of a fertil hill, where leaving the river our way N. E. though feveral narrow valleys and over small hills, generally middling land, yielding oak, <Modal modal={words.hickory} />, chefnut, and fome pine, to the fummit of a high hill, where we faw Shamokin Hill, diftant four miles only; going down we came to uneven fony ground producing <Modal modal={words.pitchPine} /> and oak, as far as the point of Shamokin Hill, whence we had a pleafant profpect of the fall of the river, quite crofs without any great Rocks. The ftream runs very fwift, but canoes or flat-bottomed boats may go up or down well enough: the bottom of this defcent is wafhed by Shamokin Creek three rods wide, this we forded to a fruitful bottom half a mile wide, beyond which two miles good oak land brought us to the town of Shamokin. It contains eight cabbins near the river's bank right oppofite the mouth of the weft branch that interlocks with the branches of Allegheny. It is by means of this neighbourhood that we may reafonably hope, when thefe parts fhall be better known, that a very beneficial Trae may be extended through the Hokio into the Miffiffippi and its branches among the numerous nations that inhabit their banks. It wew to be withed, that the Englifh government in thefe parts had been more diligent in fearching and furveying the heads of their own rivers and he fources of the others that run weftwards from the backs of their refective provinces. Yet enough is already known to juftify the furmifes of Mr. de la Sale, who in his Journal addreffed to the Count de Frontenac expreffes his fears, left the Englifh, from their fettlements, fhould poffefs themfelves of the trade on the Miffiffippi. I quartered in a trader's cabbin, and about midnight the Indian came and called up him and his fquaw, who lay in a separate part of the goods were depofited, whether together or no I did not ask. She fold the Indian rum, with which being qickly intoxicated, men and women began firft to fing and then dance around the fire; then the women would run out to other cabbins and foon return, leaving the men finging and dancing the war dance, which continued all the next day. An Englifhman when very drunk will fall faft afleep for the moft part, but an Indian, when merry, falls to dancing, running, and fhouting, which violent action probably may difperfe the fumes of the liquor, that had he fat ftill or remained quiet, might have made him drowfy, and which it even carries of by continued agitation.<br /> <br />As foon as we alighted they fhowed us where to lay our baggage, and then brought us a bowl of boiled fquathes cold; this I then thought poor entertainment, but before I came back I had learnt not to defpife good Indian food. This hofpitality is agreeable to the honeft fimplicity of ancient times, and is fo punctully adhered to, that not only what is already dreffed is immediately fet before a traveller, but the moft preffing bunifets is poftponed to prepare the beft they can get for him, keeping it as a maxim that he muft always be hungry, of this we found the good effects in the fleth and bread they got ready for us.</p>,
    <p className="pageText center"> July 9, After breakfast Lewis Evans and myfelf went to the point of the mountain clofe to the N.E. branch, a mile and a half up the river from our lodging, and good level rich land all the way; we walked thither, carrying our blankets with us, and flept near three hours. Here we regulated our journey, and having taken a pleafant view of the range of mountains, and the charming plane of Shamokin, 2 miles long and above one broad, skirted on the Weft and North by the river, and encompaffed Eaft, and partly South, with lofty hills, befides a fine vale bordering the North Weft branch, we returned to the town and fined. In the afternoon we borrowed a canoe, and paddled up the Weft branch. It is near two-thirds as broad as the North Eaft or main river: I went afhore on the fouth fide to the point of a hill to look for curiofities, but found none; the rock confifted of a dark colored thelly ftone: Then we diverted our felves with fwimming, the water was chin deep moft of the breadth, and fo clear one might have feen a pin at the bottom. At night I hung up my blanket like a hammock, that I might lay out of the reach of the fleas,  troublefome and conftant guefts in an Indian hut; but I found my contrivance too cool for a place open on all fides, tho covered with a kind of granary, efpecially the wind blowing cold from the N. W.</p>,
    <p className="pageText center"> 10. We departed in the morning with Shickalamy and his fon, he being the chief man in the town, which confifted of Delaware Indians; he was of the fix nations, or rather a Frenchman, born at Montreal, and adopted by the Oneidoes, after being taken prifoner; but his son told me he was of the Cayuga nation, that of his mother, agreeable to the Indian rule Partus fequitur ventrem, which is as reafonable among them as among cattle, fince the whole burthen of bringing up falls on her; therefore in cafe of feparation the children fall to her thare.<br /> <br />We had many advantages from the company of thefe guides, were perfectly acquainted with that part of the country, and being of the fix Nations they were both a credit and protection; and, alfo as we went to accommodate the differences, and allay the Heart-burnings that had been raifed by a late skirmish on the back of Virginia between fome of thefe nations and the Englifh, we could not but derive a confidence from the company of a chief.<br /> <br />We coafted the river near a mile to the ford, where we had a good bottom not above 3 feet deep; this brought us to an Ifland near 2 miles long and a quarter broad, pretty rich at the lower end, and near the river, but the higher end fandy, from the drifted left there by the floods, it therefore produces little but pitch pine. After leaving the lower end where we faw feveral cabbins, we once more took water for the oppofite fhore, but the bottom is lefs even, though not above half as wide as the laft, which is about 400 yards.<br /><br />Hence leaving the weft branch about half a mile on our left, and rich low ground between with gravel, oak and pintch-pine land on our right, we reached a pretty fpring of good water, fituated between the fwamp and dry ground. This, fince our paffage over the Blue Mountain was the only one we met with till we came near Onondago, for on that fide the currents and creeks are chiefly formed by the water oufing and draining from the bottoms of the mountains and hills, and are gradually collected in this manner into rivulets. But on the fouth of this great ridge, it gufhes out between the rockets in ftreams big enough to turn a mill, in other places rifing and bubbling out of the earth in quantity fuufficient to fill a pipe an inch fquare, or thereabout.<br /> <br />Our journey now lay through very rich bottoms to a creek 6 miles from Shamokin, a great extent of fruitful low ground ftill continuing. Here we found a fine meadow of grafs on our right, and rich dry ground on the left. In our path lay a large Rattle fnake, but he civilly crept into the grafs, and let us pafs without danger. Our way from hence lay through an old Indian field of excellent foil, where there had been a town, the principal footfteps of which are  <Modal modal={words.peachTrees} />, plumbs and excellent grapes. A great flood came down this branch a few years paft, and drove abundance of fand over this ground a great depth among the trees. It rofe 20 feet perpendicular, wathing away many yards of the bank, which was compofed of gravel and fand, and doubtlefs had been raifed to that heighth by former inundations, for the wood ground 30 rod from the river is feveral feet lower than the bank; a little above this devaftation we dined.<br /> <br />And now leaving the river we held a new courfe over a fine level, then down a rich hollow to a run, where we faw a fummer duck; and fo down the run, a little beyond this turns a path to Wiomick, a town on the eaft branch, hence N. N. E. then N. after W. to a rich bottom near the river, where Shickcalamy formerly dwelt, at the upper end of which reffftlefs torrents had carried abundance of fand into the woods. With this bottom we left the river for the prefent, and kept a variable courfe through the gap of the mountain N. and N. W. over middling champion land, producing fome pitch pine, and large white and black oak, fome fwamps and brooks, by one of which we lodged in a fertile valley, that we reached before night.</p>,
    <p className="pageText center"> 11. About break of day it began to rain, and the Indians made us a covering of bark got after this manner: They cut the tree round through the bark near the root, and make the like incifion above 7 feet above it, there horizontal ones are joined by a perpendicular cut, on each fide of which they after loofen the bark from the wood, and hewing a pole at the fmall end, gradually tapering like a wedge about 2 feet, they force it in till they have compleated the feparation all round, and the bark parts whole from the tree, one of which, a foot diameter, yields a piece 7 feet long and above 3 wide: And having now prepared four forked fticks, they are fet into the ground the longer in front; on thefe they lay the crofs-poles, and on them the bark. This makes a good tight fhelter in warm weather. The rain was quickly over, but as it continued cloudy, we did not care to leave our fhed. Here our Indians foot a young deer, that afforded us a good feaft.</p>,




<p className="pageText center"> 
    12. We let forward and travelled up the Run, bearing N. W. along a narrow valley, moderately rich, the hills hung with lofty timber, the ftones generally flat, then up a fleep hill, where I found foflil fteel in many flones, the foil middling oak land • and here had a view of a Bluf point N. by the river fide ; then defcending down a fleep hill N. E. we came to a rich bottom by the river ; hence N. after N. W. to a creek, and lb through a grove of white walnut and locuft, and exceeding rich land, half a mile broad, and now lome higher level land, affording oak, hickery, walnut, locuft, and pitch pine, our courfe generally N. N. W. till riding over a hazel plane we met eight Shawaneje Indians on horfeback coming from Allegheny, and going to Wiomick upon an im- portant account, as they fa id. We turned back with them to the adjacent wood, and fate dow n together under a fhady oak j the  fquavJ which they brought to wait upon, them kindled a fire to light their pipes ; our Interpreter and Shickcalaniy let down with them to fmoke, the cuftomary civility when two parties meet ; Conrad IVeijar underftand- ing they were fbme of the chiefs of the Sba'W- anefe , acquainted them with our bufinels at Onondago , a compliment they were lo well pleafed with, that they gave_ us th elohay, a particular Indian expreffion of approbation, and which is very difficult for a white man to imi- tate well • after half an hour’s grave dilcourfe ieveral of them went to catch the horfes, and one of the principal men made a handfome fpeech, with a pleafant well compoled coun- tenance, to our interpreter, to the following effeft : 4 That they were lenfible with what 
4 an unwearied diligence lie had hitherto been 
4 inftrumental in preierving peace and good 
4 harmony between the Indians and White 
4 Teople, and that as they could not but now 
4 commend the prudence and zeal with which 
4 he had effe&ed this laudable purpole, lo 
4 they earneftly entreated and fincerely hoped 
4 he would Hi 11 perlevere in the fame endca- 
4 vours and with the fame fuecels, and that his 
4 good offices may never be wanting on any 
4 future occafion. 
The Sbazvanefe , or Shaounons , as they are called by the French, are the fame people, the ^nations :and at A fee lork arecalled Stiauas , they dwell upon the Hoklo and to the  fouthward of it, between whom and that of the Cherokees is a river lbmetimes called by that name. It was againft this people the fix na- tions firft turned theif Arms with fuccels, after they had fled before warlike Adaron- dacks , and having thus learri’d to conquer, ven- tured to attack the'r hitherto victorious ene- mies, who could not have lupportcd this war without the unexpected alfiftance they received from the French. 

After taking our leaves, we continued our journey to a large creek 4 or j rod wide which wafhes on each fhore a charming country of rare foil as far as the river. On the other fide of this creek we rode through a deferted Town in the neck between them \ a few miles more brought us to our dining place, and in the afternoon we turned our backs on this branch, and rode N. W. down a valley 20 rods wide, wooded with pitch pine on the right hand and white on the left, the Run be- tween • then N. W. by W. by the fide of a hill and bottom of white pine, down which we rode 1 hours, upon better land, the N. W. middling land, now up a hill N. W. to a point, a prolpeCt of an opening bearing N. then down the hill to run, and over a rich neck lying be- tween it and Tiadanghton bearing N. W. where we lodged within about 50 yards of a hunting cabin, where there were 2 Men, a Squaw and a  child, the men came to our fire and made us® prefent of l'ome venifon, and invited Mr IVeifar, Shtckalamy and his fon, to a feaft at their cabin. It is incumbent on thole who partake of a feaft of this fort, to eat all that comes to their fhare or burn it : now Weifar being a traveller was intitled to a double fhare, but he being not very well, was forced to take the benefit of a liberty indulged him, of eating by proxy, and called me, but both being unable to cope with it, Lewis came in to our a Hilda nee, not- withftanding which we were hard let to get down the neck and throat, for thele were allotted us ; and now we had experienced the utmoft bounds of their indulgence, for Lewis ignorant of the ceremony of throwing the bone to the dog, tho’ hungry Dogs are gene- rally nimble, the Indian more nimble, laid hold of it firft, and committed it to the fire, religioufly covering it over with hot afhes. This leems to be a kind of offering, perhaps firft fruits to the Almighty power to crave future fuccels in the approaching hunting lea- fon, and was celebrated with as much decency and more filence, than many fuperftitious ce- remonies: the bigotry of the popifh miftiona- ries tempt them to compafs fea and land to teach their weak Prolelites what they call the chriftian religion. To this I may add another ceremony at bear hunting, as related by a celebrated author, this dtverfion being in the winter when this animal is very fat, the greale that fwims on the broth becomes a perfect oil, which the Indians frequently drink untill they burft — — - As loon as the bear is killed, the hunter places the Imall end of his pipe in its mouth, and by blowing in the bowls, fills the mouth and throat full of fimoak, then he conjures the departed Spirit not to refent the injury done his body, nor to thwart his future Iport in hunting, but as he receives no anfvver to this, in order to know if his prayers have prevailed, he cuts the liga- ment under the bear’s tongue, if thele ligaments contract and lhrivel up, being call into the fire, which is done with great folemnity and abundance of invocations : then it is efleemed a certain mark (as it rarely fails) that the manes are appealed. It was now time to return to our fire where we laid us down to reft. </p>,

    <p className="pageText center"> 
    The 13//?, in the morning, the Indians re- 
paid our vifit, and entertained us with a fa- 
miliar converfation for half an hour at the fire. 
We then let out up the creek, where I oblerved 
three noble white pine trees, with many large 
green cones hanging on the top and fide branches 
over the creek, which was three rods broad and 
pretty deep, had thefe been ripe I know not 
how we Ihould have got at them, as they 
were at the extremity of large branches, that 
hung over the Water, on which part of the 
branch they generally grow. Soon after we 
E came 

c 
came to a Ipacious level of m Idling land, 
oak, and pine, next to a large rich bottom, 
and at the upper end o an extenfive grove of 
white pine, after this a graffy plain of ao acres, 
then round the end of a hill, and along a val- 
ley, and run N. by W. high timber and good 
land on the hill fide N. then W. and lafbly , at 
half an hour after 8 N. here our Indians fhot a 
young deer. The land and timber good, brown 
loil, and the Hones flat and gritty. From 
hence going over a hill we law a gap N. N.W. 
and delcending down a fieep part of the hill 
to the head of a Honey brook and hollow, 
we made our way through it, it was full of 
fpruce and white pine ; at the bottom we 
killed a rattle fnake, then crolfed the brook 
and traverled a rich bottom N. N. E. the 
upper end pine, fpruce, oak, laurel, poplar 
and chefnut, fome limes, Honey and brown 
foil, Icveral times crolfed the creek and over 
rich bottoms and Honey hill fides with laurel, 
pine, lpruce and fivamps, till towards night. 
On the north fide of a deep Honey yet rich 
foil, I found roots of Ginfeng ; at night we 
lodged by a creek; and the two Indians that 
feaficd with us, who accompanied us to the 
Cnyv.ga branch. 
    </p>,
    
    
    <p className="pageText center"> 

The 1 4ib, Having lorded the creek we 
kept generally a N. N.'E. courle, moHly along 
■rich bottoms interlperled with large ” lpruce 
and white pine, oak, beach and plane tree, 
ginleng, 

[ 2 7 ] 
ginfong, and many more. We frequently pafie^ 
the creek (which was very ftrong) for r!i e 
mountains often clos’d on one fide • it was big 
enough to turn two mills. At p o’clock the 
Indians fi fired for trout, but caught none, be- 
ing provided with no other means of taking 
them but by poles fliarpened at the end to 
fixike them, and the water deep : at the foot 
of a hill we crofted the creek once more, and 
rode along a fine bottom, full of great wild 
nettles. The timber was fugar birch, fugar 
maples, oak and poplar, our courle N. W. 
continued till after 1 2 ’clock, then followed 
the eaft branch N. N. E. about a mile, all a 
rich bottom where we found a Licking Pond, 
where we dined, the backs parts of our coun- 
try are full of thefo liching ponds, fome are 
of black fulphureous mud, fome of pale clay, 
the deer and elks are fond of licking this clay, 
fo that the pond becomes enlarged to’a rood or 
hall an acre, the foil, I fuppofe contains fome 
laline particles agreeable to the deer, who 
come many miles to one of thefe places, there 
had been a great elk there that morning, but 
the Indians told us that many years ago fome 
Indians quarrelled there, in the fquablc one 
loft his life, and that this made the deer keep 
from thence for many years. 
Now traveling up the run eaft, we left it on 
the right hand, to go up a hill covered with 
Iprucc, oak fpruee, lawrel, opulus, yew, with 
E 2 ginieng 

[ *s ]. 
ginfeng and atalialhum in abundance, then 
kept generally an eaft cotirfe, having feveral 
hollows and fteep alcents and over many 
boggy rotten places, lome laurel and very 
high timber, then down the fide of a hill to 
an old beaver dam, over which we palled, 
and then over a large level of very good 
ground, tall timber and abundance of leather- 
bark or thy me lea , which is plentiful in all this 
part of the country. Our lodging was in this 
ipacious flat. 
    </p>,

    <p className="pageText center"> 
    The 15th, We fet out aN. E. courle, and 
pa fled by very thick and tall timber of beach, 
chelhut, linden alii, great magnolia, fugar- 
birch, fugar-maple, poplar, fpruce and fome 
white pine, with ginfeng and maidenhair ; 
the foil black on the furface, and brown un- 
derneath, the Hones a brown grit, the way very 
uneven over fallen trees, abundance of hollows, 
and heaps of earth, turned up by the roots 
of proftrate timber : hence it is that the fur- 
face is principally conrpofed of rotten trees, 
roots, and mols, perpetually fhaded, and for 
the raoft part wet, what falls is conftantly 
rotting and rendring the earth loole and Ipungy , 
this tempts abundance of yellow walps to 
breed in it, which were very troublelome 
to us throughout our journey, on the branches 
of Sufqnehanab our courle this day was gene- 
rally eaft, and we got through this dilmal 
wildcrnefs about two hours before funfet, and 
came 

[ *p] 
came to oak and hickery land, then down * 
keep hill producing white pine to a creek called 
Comma a branch of Tomntohow, where we 
lodged in a bottom producing ginieng, farea- 
parilla mediola, maidenhair, darallia, panax, 
rnitela, chrihophoriana, with white, red and 
blue berries , we had a fine warm night, and 
one of the Indians that had fio generoufly 
feafled ns, fung in a folemn harmonious man- 
ner, for feven or eight minutes, very different 
from the common Indian tune, from whence 
I conjectured it to be a hymn to the great 
fpirit as they exprefs it. In the morning I 
asked the Interpreter what the Indian meant 
by it, but he did not hear him, and indeed I 
believe none of the company heard him but 
myfelf, who wake with a little noife, rarely 
Deeping found abroad. 
    </p>,
    
    <p className="pageText center"> 
    The 1 6th, We began our journey up a little 
hill, fteep and fomewhat honey, and then 
through oak, chefnut, huckleberries, and 
honeyfuckl'es, the land poor, fometimes white 
pine, fpruce and lawrel ; thus far N. but at 
half an our after feven N. E. through a great 
white pine, fpruce fwamp full of roots, and 
abundance of old trees lying on the ground, 
or leaning againft live ones, they flood fo 
f thick that we concluded it almoft impoffible 
to fhoot a man at ioo yards diftant, let him 
hand never fo fair. The hraight bodies of 
thefe trees hood fo thick, a bullet muh hit 
one before it could fly ioo yards, in the moll 
open 

[ 30 J 
open part. At half an hour after nine, we rode 
down a fmall hill, and crofted a fmall run^ 
then climb’d a fteep hill of oak land, and by 
ten to a large creek called Uskoho , then round 
the point of a hill, midling land, and up 
the fide thereof which was good, and 
down the other fide very fteep to a Run, 
with good corn land to the top of a hill in 
fight of the eaft branch of Sufquehanah , fo far 
we had pale clay land from the vvildernels, 
though blackifh on the furface, for 2, 3 or 4 
inches, then down half a mile on a moderate 
defeent, good oak and hickery land to a large 
rich grafty and weedy bottom, 40 rood wide, 
producing elm:, birch, linden, lotus, white- 
walnut, and very large white pine, where the 
land is a little higher than common ; at the 
upper end of this bottom we dined at half an 
hour after 12, we let out again at 3, courfeN. 
along a fteep hill fide, full of excellent flat 
whet-ftones of all fixes, from half a foot, to 4 
feet long, and from 2 inches to a foot wide, 
and from half an inch to a foot thick ; I brought 
one home which I have ufed to whet my ax, 
feythe, chizzels and knife, and is yet very little 
the vvorfe for wear, it is as fine as the Engl'jb 
rag, but of a blackifh colour : this lafted two 
miles clofe to the river which is here 100 yards 
wide, and deep enough for flat-bottomed boats, 
then we came to a very rich low land, moft of 
the way N. N. E. to the Cayuga branch, near 
100 yards wide which wc crofted, then rode 
near 

[ 3*3 
near a mile to the town-houfe, bearing N. this 
town is called Tohicon , and lies in a rich neefc 
between the branch and main river: the Indians 
welcomed us by beating their drum, as loon as 
they faw us over the branch, and continued 
beating after the Englijb manner as we rode to 
the houfe, and while we unfaddled our Horfos, 
laid in our luggage and entered our felves : the 
Houle is about 30 foot long, and the fined 
or any I law among them. The Indians cut 
long grals and laid it on the floor for us to fit 
or lie on ; leveral of them came and lat down 
and linoaked their pipes, one of which was 
fix foot long, the head of done, the flem a 
reed , after this they brought victuals in the 
ufual manner : here I oblerved for the firfi 
time in this journey, that the worms which 
had done much mifohiefin leveral parts of our 
Province, by deflroying the grals and even 
corn for two fummers, had done the lame thing 
here, and had eat off the blade of their maize 
and long white grals, fo that the Aems of both 
flood naked 4 foot high ; I faw dome of the 
naked dark coloured grubs half an inch long, 
tho’ moft of them were gone, yet I could 
perceive they were the fame that had vifited 
us two months before ; they clear all the grals 
in their way, in any meadow they get into, 
and feem to be periodical as the locufls and 
caterpillar, the latter of which I am afraid 
will do us a great deal of milchief next dim- 
mer. Here one of our hofts at the hunting 
cabin 

[30 
gabin left us to go up this branch to his own 
country, that of th zCayagas, this night it rained 
a little, and the morning was very foggy. 
</p>,

    <p className="pageText center"> 
    17<sup>th</sup>.  Day, we croffed the neck to the eaft 
branch of Sujqu$hanah, up which we travelled 
along a rich bottom of high grals and woods of 
a fine creek, then over oak and pitch pine land 
to a fwampy run and fine meadow ground, 
then eaft through white and pitch pine, oak, 
hickery and hazel bottom, and fo N. E. to 
the river, where grew, a white pine dole to the 
water, with four green cones on. ftill we kept 
N. E. at io bore S. Here the river turned 
thus, occafloncd by fome high barren moun- 
tains on the other fide, whole lides came dole 
to it, and turned the ftrearn in this crooked 
manner. We travelled through a fine vale of 
pine land. Here was a place where the Indi- 
ans had been a pawawing. They cut a parcel 
of poles, which they flick in the ground in 
a circle, about the bignels of hop poles, the cicrie 
about five foot diameter, and then bring them 
together at the top, and tie them in form of 
an * oven, where the conjurer placeth himfelf- 
then his adiftants cover the cage over clofo 
with blankets and to make it ftill more 
fuffbeating, hot ftones are rolled in • after 
all this the prieft mull cry aloud, and agitate 
his 
* Vide Capt. Beverley's hii! of Virginia, $vo. a curious and 
ufeiul work, and the Daren Labontans entertaining voyages 
in theft parts, 

c 33 ] _ 
his body after the moft violent manner, till 
nature has almoft loft all her faculties before 
the ftubborn fpirit will become vifible to him, 
which they fay is generally in the fliape of 
fome bird. There is ufually a ftake drove into 
the ground about four foot high and painted. 
I fuppofe this they defign for the winged any 
Being to perch upon, while he reveals to the 
invocant what he has taken fo much pains to 
know. However, I find different nations 
have different ways of obtaining the pretended 
information. Some have a bowl of water, 
into which they often look, when their 
ftrength is almoft exhaufted, and their fenles 
failing, to lee whether the fpirit is ready to 
anfwer their demands. I have feen many of 
thefe places in my travels. They differ from 
their fweating coops, in that they are often 
far from water, and have a ftake by the cage, 
yet both have a heap of red hot ftones put in. 
at ii we d veiled our dinner, and found an 
Indian by the river fide, refting himfelf ; all 
his provifion was a dried eel • this he made us 
a prcfent of, and we gave him a lhare of our 
dinner. Their way of roafting eels is thus ; 
they cut a ftick about three foot long, and as 
thick as one’s thumb, they fplit 'it about a 
foot down, and when the eel is gutted, they 
coil it between the two fides of the ftick, 
and bind the top clofe, which keeps the eel 
flat, and then ftick one end in the ground be- 
fore a good fire. 
F 
At 

[ 34 ] 
At half an hour after one we let out, mid- 
dling oak land but ftony, yet no great rocks ; 
at a N. E. then N. good land, a rich bottom 
and flat Hones on rifing ground ; we croffed 
the Owagan branch about thirty yards wide. 
Then half a mile to the town fo called, where 
we lodged, there is very good land in this 
neck between the branch and main river. A 
little before fun-fet I walked out of town to 
regulate my journal ; but the gnats were fo 
troublefome I could not reft a minute. They 
bit my hands fo cruelly I was forced to give 
over my purpofe. Thefe are lb troublefome 
from fun-rifing to fun-fetting that we could 
not reft while we were eating our victuals 
without making feveral fires of wet leaves 
round us to keep them off. 
    </p>,

    <p className="pageText center"> 
    18. This morning we lent an Indian with 
a firing of Wampum to Onondaga, to acquaint 
them with our coming, and the bufinels we 
came about, that they might lend meflengers 
to the ieveral nations to haften their deputies 
to meet them as loon as polfible, for this 
town ferves the five nations as Baden does the 
thirteen cantons of Switzerland, with this 
difference, that Onondago is at the lame time the 
capital of a canton. 
We fet out at half an hour after p, and 
travelled till 6 ; this day our general courle 
was N. and N. W. having fine level rich land 
moll of the way, and rail timber oak, birch, 
beech 

[ 35 J 
beech, afti, fpruce, linden, elm and herb 
hierophilon, hepatica and maidenhair in abun- 
dance. We lodged by Front Creek in a fpa- 
tious vale, and it looking like rain, we made 
us a cabbin of lpruce bark, but no rain 
came. 
    
    </p>,

    <p className="pageText center"> 
    19. We rode over good level land : after 
we came to very fwampy bottoms, thickets 
and hills of fpruce, and white pine ; here 
were three ridges of fteep hills that run nearly 
E. and W „ and with difficulty we rode over 
their fteep cliffs, which projected clofe to the 
creek. We were feveral times obliged to 
ford it backwards and forwards. Several runs 
come into the creek on both ftdes from be- 
tween the mountains, Now we came to moft 
excellent level ground, than which nothing 
can be more fruitful, full of tall timber, fugar, 
maple, birch, linden, afti, and beech, and 
fhrubs, as opulus, green maple, hornbeam, 
hama m elis, folanum, goofterries and red cur- 
tans triphilum in abundance. Here we dined 
by a pleafant creek and choice land. Alter 
dinner we foon began to mount up a pretty 
fteep hill, covered with oak, birch, afti, and 
higher up abundance of chefnut and lome 
hickery. This is middling land, the produce 
the fame for three miles as our land bears 
with us. It lies very high, and when cleared 
will have an extenftve profpect of fertile 
vales on all ftdes. We then rede down a long 
F a rich 

C 36 ] 
rich hill of moderate delcent, where grew abun- 
dance of goofeberries , all the trees were 
crouded with wild pigeons, which, I fuppofe, 
breed in thefe lofty fhady trees. I found ma- 
ny fbflils on this hill. 
Another fertile valley welcomed us at the 
bottom, over which travelling a mile we 
lodged at a Run, which our Indians told us 
emptied into the lake Ontario ; if fo, it muft 
run into the Cayuga river, and fo to Ofwego. 
    
    </p>,


    <p className="pageText center"> 
    20<sup>th</sup>. 20. We continued our journey in this plea- 
sant vale until we afcended a hill, beyond 
which a flant brought us to two ponds that 
run into a branch of Sufquehanah ; croffing 
this we joined a part from the Carugas coun- 
try; then over a rich level to another branch 
big enough to turn a mill where we crolfed it. 
It was now three-quarters after 10, then 
good land to half an hour after x 2 yet no 
hickcry nor oak, but elm, fugar, maple, 
beech, birch, white walnuts, hop, hornbeam, 
and abundance of ginfeng. After dinner we 
palled a branch of the great Sufquehanah , 
down which lake canoes may go quite to where 
the river is navigable for boats. On the 
banks I found the gale like the European. 
This is the neared branch of Sufquehanah 
river to that of Onondago. Leaving this on 
our right, on our left we perceived a hill 
where the Indians fay Indian corn, tobacco 
and fquafhes were found on the following oc- 
casion : 

[ 37 ] 
call on : An Indian (wbofe wife bad eloped) 
came hither to hunt, and with his skins to 
purchale another here, he efpied, a young 
fquaw alone at the hill ; going to her, and 
enquiring where Ihe came from, he received 
for anfwer, that lhe came from heaven to 
provide fuftenance for the poor Indians , and 
if he came to that place twelve months 
after he fhould find food there. He came- 
accordingly and found corn, fquafhes and to* 
bacco, which were propagated from thence 
and fpread through the country, and this filly 
ftory is rcligioufly held for truth among them. 
Our way hence, lay over fine rich level land 
as before, but when we left it, we enter’d a 
miferable thicket of Ipruce, opulus, and dwarf 
yew, then over a branch of Sufquehanah , big 
enough to turn a mill, came to ground as 
good as that on the other fide the thicket ; 
well cloathed with tall timber of lugar birch, 
fugar maple, and elm. In the afternoon it 
thunder’d hard pretty near us, but rained little : 
We obferved the tops of the trees to be lo dole 
to one another for many miles together, that 
there is no feeing which way the clouds drive, 
nor which way the wind lets : and it leems 
almoft as if the fun had never Ihone on the 
ground, fince the creation. About fun let 
it cleared up, and we encamped on the laft 
branch of Sufquehanah, the night following it 
thundred and rained very fall, and took us 
at 

r 5? j 
at a difad vantage, for we had made no fhelter 
to keep off the rain, neither could we fee it 
till juft over our heads, and it began to fall. 
One of our Indians cut 4 fticks 5 feet long, 
and ftuck both ends into the ground, at 2 foot 
diftance, one from another; over thefo he fpread 
his match coat and crept through them, and 
then fell to hinging : in the medn time we were 
fetting poles flantwifo in the ground, tying 
others crols them, over which we . fpread our 
blanket and crept dole under it with a fire 
before us and fell faft afleep. 
I waked a little after midnight, and found 
our fire almoft out, fo I got the hatchet and 
felled a few faplings which I laid on, and made 
a roufing fire, tho’ it rained ftoutly, and laying 
down once more, I flept found all night. 
    
    </p>,

    <p className="pageText center"> 
    21<sup>ft</sup>. In the morning when we had dry’d our 
blankets, we kept along the fide of a hill, 
gradually afcending, the foil good, timber 
tall, and abundance of ginfeng ; here the mui- 
quetoes were veryltroublefome, it being foggy, 
thence proceeding down a long gradual defcent 
on good rich foil with tall timber, fugar, ma- 
ple, chefnut, cherry, linden^and elm, we tra- 
veled a large valley and rivulet, then rode up 
a little fteep hill where we flopped at half an 
hour after eleven, this hill was a little fandy, 
with forae large pines growing upon it ; here 
we walked and looked about us, having not 
nad luch an opportunity for two davs, during 
which 

[ 39 1 
which time we had a fine profpeCt over the 
vale of the great mountain we had juft crofted, 
and which differed fo remarkably from all I 
had ever been upon before, in its eafy and fruit- 
ful afcent and defcent, in its great width, 
every where crowned with noble and lofty 
woods, but above all, in its being intirely free 
from naked rocks and fteep precipices. 
From thefe remarks, one might be naturally 
led to imagine, that the Waters at the flood 
gradually ebbed and retired on each fide, to- 
wards the river St. Lawrence and Sufqnehanah , 
the very next ridges on either fide being nar- 
rower, fteeper, and fome rocks wafhed bare, 
and fo all the adjacent ridges the farther they 
are from this, appear to be more wafhed, more 
compofed of great banks of craggy rocks and 
tremendous precipices, the foil more carried off, 
mighty rocks tumbled down, and thole leftap- 
pearing as if piled up in a pyramid and hereby 
preferved from a fhare in the awful ruin below 
among their fellows ; the foil being fo per- 
fectly wafhed from their root, as evidently no 
longer to fupport them- After having enjoyed 
this enchanting profpect and entertaining hypo- 
thefis, we delcended eafily for foveral miles, 
over good land producing lugar-maples, many 
of which the Indians had tapped to make 
fugar of the fap, alfo oaks, hickery, white 
walnuts, plums and fome apple trees, full of 
fruit ; the Indians had fet long bufhes all round 

[ 4 o ;j 
the trees at a little diftance, I fuppofe to keep 
the final! children from ftealing the fruit before 
they were rjpe’ here we halted and tinned our 
horfes to grafs, while the inhabitants cleared a 
cabin for our reception ; they brought us 
victuals, and we difpatched a meffenger im- 
mediately to Qmndago to let them know 
how near we were, it being within 4 miles. 
All the Indians , men, women and children 
came to gaze at us and our horfes, the little 
boys and. girls climbed on the roofs of their 
cabins, about ten in number to enjoy a fuller 
view, we let out about ten, and travelled over 
good land all the way, moftly an ealydefcent, 
ibrue lime-ftone, then down the eaft hill, over 
ridges of lime-ftone rock, but generally a mo- 
derate defeent into the fine vale where this 
capital (if I may lo call it) is fituated. 
We alighted at the council houle, where 
the chiefs were already aflembled to re- 
ceive us,, which they did with a grave chear- 
ful complaifance, according to their cuftom ; 
they fhew’d us where to lay our baggage, and 
repofe ourielves during our ftay with them ; 
which was in the two end apartments of this 
large houle. The Indians that came with us, 
were placed over againft us : this cabin is about 
80 feet long, and 17 broad, the common 
paflage 6 feet wide, and the apartments on 
each fide 5 feet, railed a foot above the palfage 
by a long fapling hewed fquare, and fitted 

tvith joifts that go from it. to the back of the 
houie ; on thefe joifts they lay large pieces of 
hark, and on extraordinary occafions lprcad 
marts made of rallies, this favour we had ; on 
thefe floors they let or lye down every one as 
he will, the apartments are divided from each 
other by boards or bark, 6 or 7 loot long, 
from -the lower floor to the upper, on which 
they put their lumber, when they have eaten 
their homony, as they let in each apartment 
before the fire, they can put the bowel over 
head, having not above 5 foot to reach ; they 
let on the floor fometimes at each end, but 
modify at one : they have a fhed to put their 
wood into in the winter, or in the fummer, 
to flat to converfe or play, that has a door 
to the fouth; all the fides and roof of the cabin 
is made of bark, bound fall to poles let in the 
ground, and bent round on the top, or fet 
afiatt, for the roof as we let our rafters ; over 
each fire place they leave a hole to let out the 
imoak, which in rainy weather, they cover 
with a piece of bark, and this they can eafily 
reach with a pole to pufh it on one fide or 
quite over the hole, after this model are molt 
of their cabins built, figure annexed. 
The fine vale of Gnoudaga runs north and 
fouth, a little inclining to the weft, and is 
near a mile wide, where the town is fituated 
and excellent foil, the river that divides this 
charming vale, is 2, 3 or 4 foot deep, very 
G full 

[- 4*3 
full of trees fallen acrols, or drove on heaps 
by the torrents. The town in its prelent Hate 
is about 2 or 3 miles long, yet the fcattered 
cabins on both Tides the water, are not above 
40 in number, many of them hold 1 families, 
but all Hand fingle, and rarely above 4 or j 
near one another ; lb that the whole town is a 
ftrange mixture of cabins, interfperfed vvithgreat 
patches of high grals, bulhes and fhrubs, lome 
of peale, corn and fquafhes, lime-ftone bottom 
compoled of foffils and lea fhells. 
It leems however, to have been more con- 
fiderable when it became a conqueft to the 
arms of Lewis 14th, at which time it muft 
have been more com pad, for hiftory relates 
it to have been llockadoed. The Count k 
Frontenac governor of Canada , at the head 
of the moft numerous army the French ever 
drew together in N. America , had the fatis- 
faction in 1696 of triumphing over the alhesof 
Onondago , whole inhabitants terrified with 
what they had heard of bombs, and generally 
unwilling to hazard a fet battle, had already 
abandoned their houfes after letting them afire, 
whatever glory the grand monarque might 
reap from this exploit, it is certain he gain- 
ed no other advantage, as a longer Hay 
muft have inevitably ftarved the army, fo its 
precipitate retreat helped our Indians to an 
opportunity of taking their revenge by cutting 

[ 43 ] 
of every firagling canoe, in their return by 
water to Monreal, 
At night, loon after we were laid down to 
Jleep, and our fire almoft burnt out, we were 
ep pertained by a comical fellow, difguifed in 
as odd a drels as Indian folly could invent ; 
he had on a clumfy vizard of wood colour’d 
black, with a nole 4 or ,5 inches long, a grining 
mouth fet awry, furnifhed with long teeth, 
round the eyes circles of bright brals, fur- 
rounded by a larger circle ol white paint, 
from his forehead hung long trefles of buffaloes 
haif, and from the catch part of his head ropes 
made of tire plated husks of Indian corn ; I 
pannot recoiled the whole of his drefs, but 
that it was equally uncouth : he carried in one 
hand a large ftaff, in the other a calabafh with 
i'mall Hones in it, for a rattle, and this he 
rubbed up and down his Haff- he would 
fometimes hold up his head and make a hide- 
ous noife like the braying of an afs ; he came 
in at the further end, and made this noife at 
firft, whether it W S3 becaufe he would not. 
l'urprife us too fuddenly I can’t fay : I ask d 
Conrad JVeifer , who as well as myfelf lay 
next the alley, what noife that was? and Shic- 
kalamy the Indian chief, our companion, who 
I fuppofed, thought me fomewhat feared, 
called out, lye Hill John , I never heard him 
fpcak fo much plain Englijh before. Thejack- 
pudding prefently came up to us, and an Indian 
'• G a boy 

[ 44 ] 
bov came with him and kindled our fire, that 
„ might lee his glittering eyes and antick 
poftures as he hobbled round the fire, fometimes 
he would turn the Buffaloes hair on one fide 
that we might take the better view of his ill- 
favoured phyZ, when he had tired himfelf, 
which was fometimb after he had well tired us, 
the boy that attended him ftrucfc 2 or 3 fmart 
blows on the floor, at which the hobgoblin 
feemed furprifed and on repeating them he 
jumped fairly out of doors and diiappeared. 
I luppofe this was to divert us and get fome 
tobacco for himfelf, for as he danced about 
he would hold out his hand to any lie came 
by to receive this gratification which as often 
as any one gave him he would return an awk- 
ard compliment. By this I found it no new 
diverfion to any but my felf. In my whim 
I faw a vizard of this kind hang by the fide 
of one of their cabins to another town. Af- 
ter this farce we endeavoured to compote our- 
felvcs to Beep but towards morning was again 
difturbed by a drunken Squaw coming into 
the cabin frequently complimenting us. and 
finging. 
    </p>,
    
    <p className="pageText center"> 
    22<sup>d</sup>. was a fhowery day, and weftirred little out. 
    </p>,

    <p className="pageText center"> 
    23<sup>d</sup>. we hired a guide to go with us to the 
fait Ipring, 4 or 5 miles off, down the river, 
on the weft fide of it’s mouth 3 being molt of 
the way good land, and near the mouth very 
rich: 

[ 4.5 ] 
rich : from whence it runs wefhvard near a 
quarter ol a mile, a kind of a landy beach ad- 
joining to the bank of the river, containing 3 
or 4 acres. Here the Indians dig holes, about 
2 foot deep, which foon filling with brine, they 
dip their kettles, and boil the contents, until 
the fait remains at bottom ; there was a fami- 
ly refiding at this time. The boys in the 
lake fifhing, the Squaw fetching water, gather- 
ing wood, and making a fire under the kettle, 
while the husband was basking himlelf on the 
land, under the bufhes. We filled our gallon 
keg full of water and brought it to Town, 
where we boiled it to about a pound of fait. 
Our guides took their arrows, made of reed and 
down to fhoot fmall birds. About half way 
there is an excellent fpring of water, and by it 
a grove of Curboroita’. joining to a green fwamp, 
producing very high grafs. About a mile up 
the river from the lake, it runs by a ftecp bank 
at the end of a high hill. The bank was landy, 
and out of it run’d a brackifh water, which 
inclines me to think that there is a body of 
fofSl fait here abouts, by which the plain is 
fmnifhed with its intenle fait brine, and that 
it is the vapour thereof that congealj to the 
trafh and bufhes that lye on the bank, and 
glitters like flakes of Ice, or Snow, in a Sun- 
fininy day. This day a deputies arrived from 
the Cqyugas Country. 

    
    </p>,

    <p className="pageText center"> 
    24<sup>th</sup>. Lewis and I hired a guide to go with- 
us 

[ 4 * ] 
0.4th. Lewis and I hired a guide to go with 
us to Ofwego for 1 6s. our intention was more 
to get provifions for our journey home, than 
to ^gratify our curiolity. In the mean time, 
Cowad flayed at Onondaga, to treat with the 
Indian chiefs about the skirmifh in Virginia ; 
with a view to incline them fingly in favour of 
our application, before they affembled in coun- 
cil: and here I cannot help obferving, it was 
Scarcely ever known, that an Indian Chief or 
Conncellor , once gained fo far as to promife 
him intereft, did break his promife, whatever 
prefen ts have been offered him from another 
quarter. 
We travelled on foot to the Onondaga lake, 
whence we had fetched the fait water the day 
before, there we procured a hark canoe at half 
an hour after eleven, then paddled down 
the lake, and reached the lower end in two 
hours courle, N. W. This lake the French 
call Ganentahd ; hence we went down the 
river a mile N. big enough to carry a large 
boat, if the trees fallen into it where but car- 
ried away, this brought us to the river from 
the Cayuga country, near ioo yards wide, very 
flill, and fo deep we could fee no bottom, the 
land on both fides very rich and low to with- 
in a mile of the Oneido. river , where the river 
began to run fvvift, fand the bottom became 
vifible, tho’ at a good depth. At three o’clock 
we came to the laft mention’d river, down 
which the Abb any trader come to Ofcuego, half 
a mile 

t 47 ] 
a mile farther we came to a rippling, which 
carried us with prodigious fwiftnefs down the 
ftream, foon after we encountered a iecond, 
and a mile farther a third, very rough. In 
about an hour by the fun, after many other 
ripplings, we found our felves at the great fall, 
the whole breadth of the river which is above 
ioo yards wide and is eight or ten feet per- 
pendicular: here we hawled our canoe afhore, 
took out all our baggage, and carried it on our 
back a mile to a little town, of about four or 
five cabins • they chiefly fubfift by catching 
fifh and alfifling the [/lie any people to hawl 
their Bateans , and carry their goods round the 
falls • which may be about tenor twelve poles, 
then they launch again into the river, and 
down the foaming flream that furioufly on all 
fides dalhes one half againfi the rocks, near a 
mile before they come to ftifl water, and in- 
deed, it runs pretty fvvift all the way to Oj- 
zveso. Thefe Indians were very kind to us, 
and gave us boiled corn and water melons, 
while they and our guide who was a relation 
fat over againfi us in the fame cabin, chewing 
raw Indian corn flalks, fpitting out the lub- 
flance alter they fucked out the juice. But 
we could not yet underftand whether we were 
to go to the fort by land, or by wafer. In 
the morning they had catched fonie flout eels, 
and a great fifh two feet long, it was round 
and thick, they ftrike them with long fiender 
fhafts 

[ 4 § ]- 
fnafts 1 8 or a o feet long, pointed at the end 
with iron fee the Ihape. The i fplints of wood 
fpreading each fide, directs the point into the 
filh, which at a great depth it would be other- 
wife difficult to hit. I law upon one of their 
canoes in the morning a large piece of bark 
Ipread a-crofs. On this lay gravel and fand, 
and on thefe coals and allies, which I luppoled 
had been a fire, and the gravel placed there 
to lave the bark. And I took it to be a de- 
fign both to allure and lee to ftrike the fiffi. 
    </p>,

    <p className="pageText center"> 
    
    25th. Our guide, and leveral other Indians , 
lead us to the canoes belonging to the town, 
into one of which we got full of hopes of go- 
ing by water, but were much chagrin’d to find 
ourfelves only paddled crols the water, where 
we unwillingly took out our cloaths, victuals 
and blankets, and carried them on our backs 
following our guides, who were now increaled 
to three. We had 1 2 miles down the river by 
land, ' molt of the way middling land, fome 
white pine and fpruce groves to pals through, 
but moft of the way in fight of the river, 
which is very rapid moft of the way to the 
lake. On the point formed by the entrance 
of the river. Hands the fort or trading caftlc, 
it is a ftrong ftone houfe, incompaffed with a 
ftone wall near 20 feet high, and 1 20 paces 
round, built of large lquared ftones; very cu- 
rious for their loftneft, I cut my name in it 
with my knife. The town confifts of about 
70 log- 

[ 49 ] 
yo loghoufes, of which one half are in a row 
near the river, the other halfoppoflte to them, 
on the other fide of a fair were two ftreets di- 
vided by a row of pofts in the midit. Where 
each Indian has his houfe to lay his goods, and 
where any of the traders may traffick with him. 
This is furely an excellent regulation for pre- 
venting the traders from impofing on the In- 
dians, a pradife they have been formerly too 
much guilty of, and which has frequently in- 
volved the Englijh colonies in difficulties, and 
conftantlf tended to depreciate us in the efteeni 
of the natives } W ho can fcarcely be blamed 
for judging ofa nation, by the behaviour of thole 
with whom they have the moft intercourfe. 
a judgment I am lorry to confels that has (till 
lately) tended much to the making them in 
favour rather of the French, than Englifh. I 
ipeak of private perfons, not of the relpedive 
government. The chief officer in command 
at the caftle, keeps a good look out to Ice 
when the Indians come down the lake with 
their poultry and furrs, and lends a canoe to 
meet them, which conduds them to the callle, 
to prevent any perlon inticing them to put a- 
lhore privately, treating them with lpirituous 
liquors, and then taking that opportunity of 
cheating them. This officer fcems very care- 
full that all quarreling, and even the leal, nuf- 
underftanding, when any happens, be quickly 
made up in an amicable manner, fince a Ipeedy 
1 H accom- 

[ 50 ] 
accomodation can only prevent our country 
men from incuring the imputation of injuftice, 
and the delay of it would produce the difagree- 
able confequences of an Indians endeavouring 
to right himfelf by force. 
Ofwego, is an infant fettlement made by the 
province of New-lork , with the noble view 
of gaining to the crown of Great Britain the 
command of the 5 lakes, and the dependence 
of the Indians in their neighbourhood, and to 
its fubjects the benefit of the trade upon them, 
and of the rivers that empty themfelves into 
them. At prefent the whole navigation is carried 
on by the Indians themfelves in bark canoes, 
and there are perhaps many reafons for defirihg 
it fhould continue fo for fbme years at leaf!: • 
but a good englifhman cannot be without 
hopes of feeing thefe great lakes become one 
day accuftomed to Englijb navigation. It is 
true, the lamous fall of Niagara , is an infur- 
mountable bar to all paflage by water, from 
the lake Ontario, into the lake Erie, in fuch 
veffels a3 are proper for the fecure navigation 
of either ; but befides, that bark canoes are 
carried on mens fhOulders with eafe, from one 
to the other, as far as the paflage is impracti- 
cable : It will be much more ealy to carry the 
goods in waggons, fiom the upper lake, 
mto the Huron or guatoghie lake, the flrait 
1S rendered unnavigable by the Saute St. Marie 
but a veffel of confiderable burthen may fail 

[ 1 
from the hither end of the Erie lake, to the 
bottom of the lake Michigan , and for ought 
vve know, through all parts of the 3 middle 
lakes. Tliefe lakes receive the waters of many 
rivers, that in fome places approach lb near the 
branches of the vaft river that a 
fhort land carriage fupplies the communication. 
And here to ufe the words of a moft judicious 
writer, “ He that reflects on the natural Hate 
“ of that continent muft open to himlelf a 
a field for traffick in the fouthern parts of N. 
“ America , and by the means of this river 
u and the lakes, the imagination takes into 
“ view fuch a feene of inland navigation; as 
cannot be paralleled in any other part of 
u the world. ” 
The honour of firft dilcovering thele ex- 
tenfive frelh water Teas, is certainly due to the 
French , who are at this time in pofleffion of 
fettlements at Fort Fonchartrian , on the ftrait 
between Lake Erie and the Lake Huron and 
at Mijlltmahinac between the latter and the 
upper lake, but as thefei can give them no ti- 
tle againft the original inhabitants or the five 
nations. Conquerors of all the adjacent na- 
tions, lo it is difficult to conceive by what ar- 
guments thele fmall pofts, inhabited by no fub- 
jecitsof France but l'oldiers, can be extended to 
mark any pofiefiion beyond the reach of 
their gun’s, or land actually cultivated, ex- 
cept by Inch as muft intitle the crown of Great 
H % Britain 

[ 5 2 1 
Britain to all North America , both as trior 
difcoverers and prior planters, without a fubfe- 
quent defertion. .. 
The traders from New Tork come hither, 
up the Mohawks river, which difcharges itfelf 
into Uudfons river ;but generally go by land 
from Albany , to Schenectady about 10 miles 
from the Mohawks river, the carriage is but 
3 miles into the river that falls into the 0- 
neido lake, which difcharges itfelf by the Onei do 
river, into the Onondaga river, and brings their 
goods to Ojwego in the manner I have before 
related. 
W e came to the town about i a o’clock, the 
commiffary invited us to the caftle where we 
dined, together with the Do&or and Clerk. 
After dinner we had the fatisfaflion of fwim- 
mingin the la ke Ontario, which is fbme times 
called by our Indians Cadarakin , this is alio 
the name of a french fort upon it, almoft op- 
pofite to Ofwego , N. it has 4 baftions built 
of Hone, and is near half a mile in circumference; 
it Hands where the waters of this lake are al- 
ready formed into the river St. Lawrence, which 
makes a good road for great barks under the 
point of Cadarakin Bay. The famous and 
unfortunate .Mr. De la Sale had two barks 
which remains funk there to this day. 
Thefe lakes are faid to have a kind cf flux 
and reflux peculiar, fince it is affirmed to be fen- 
fiblv ebb and flood ieveral times in a quarter 
of an hour, tho’ it be perfectly fmooth and 
fcarce 

C S3} 
fcarce any wind.', But it is evident from the 
face of the earth, that the water of the lake 
Ontario is confiderably diminifhed and has loft 
ground a great number of years, for the 
fhores above a mile within land, are abun- 
dantly more low, as well as of a loofer tex- 
ture then the foil beyond, whether this effedl 
is in common to all the waters on the 
earth, according to a conjefture of the 
great Sir Jfaac Newton : Or whether it be 
not at (leaft in parO owing to the removal 
of fome great obftru&ion, which by caufing 
a fall in the river St. Lawrence , might for- 
merly pen the waters up to a greater height 
than now ; or only to the gradual wearing 
away by the perpetual paflage of the water 
over thole falls that ftill fubfift : or to a ca- 
sual ruin of fome part of one of them, I 
lhall leave to the determination of a more 
«ble naturalift than myfelf. 
The water was very clear and as cold as 
our river in May, it is well tailed and fup- 
pofed to he rao miles broad, and near aoo 
long, ftreachipg N. N. W. but thismuft be an 
error, the common maps giving it a bearing 
to the Northward of the lake, but Mr. Beilin 
thews us it lies E. and W. from the obferva- 
tions oOP. Charlevoix, on the exa&nefs of which 
he thinks he cannot too much relie, and Bel- 
lm in his map of thefe lakes has given it this 
bearing 

I 54 3 
bearing. We lodged in the caftle in the 
captains chamber. 
    
    </p>,

    <p className="pageText center"> </p>,


    <p className="pageText center"> </p>,


    <p className="pageText center"> </p>,


    <p className="pageText center"> </p>,


    <p className="pageText center"> </p>,


    <p className="pageText center"> </p>,


    <p className="pageText center"> </p>,


    <p className="pageText center"> </p>,




    
    // <p className="pageText center"> </p>,
    
    
    // <p className="pageText center"> </p>,
]


export default Book