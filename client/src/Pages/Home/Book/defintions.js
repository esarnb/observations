import React from "react";

export default {
    
/*
 
wordName: {
    text: "",
    
    title: "",
    img: "",
    imgSize: "",
    content: [<p> some text </p>],
    src: ""
}
 */
    fern: {
        text: "fern",
        title: "Filicium decipiens (Fern Tree)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Rainforest_near_Belle_-_Dominica.jpg/330px-Rainforest_near_Belle_-_Dominica.jpg",
        imgSize: "small",
        content: [
            <p> The tree ferns are the ferns that grow with a trunk elevating the leaves (fronds) above ground level.  </p>,
            <p> Tree ferns are found growing in tropical and subtropical areas, including cool to temperate rainforests in Australia, New Zealand and neighbouring regions (e.g. Malaysia, Lord Howe Island, tropical/central Americas). Like all ferns, tree ferns reproduce by means of spores formed on the undersides of the fronds.</p>,
            <p> There may be close to 600 to 700 species of tree ferns, but many becoming extinct in the past century due to human activity.</p>,
            // <p> </p>
        ],
        src: "https://en.wikipedia.org/wiki/Tree_fern"
    },
    
    oak: {
        text: "oak",
        
        title: "Quercus (Oak) Trees",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/2019-07-03_Eik_in_Kerspel_Goor.jpg/330px-2019-07-03_Eik_in_Kerspel_Goor.jpg",
        imgSize: "small",
        content: [
            <p> The oak is a tree or shrub from the genus Quercus of the beech family, Fagaceae. There are about 600 extant species of oaks, and native to the Northern Hemisphere.  </p>,
            <p> Oaks have spiral-arranged leaves, with lobate margins in many species, and some with serrated or entire leaves with smooth margins.</p>,
            <p> Oaks are keystone species in a varity of habitats from Mediterranean semi-desert to subtropical rainforests.</p>,
            <p> Many species of oak are threatened to become extinct due to changing land use and unsustainable harvesting by humanity.</p>
        ],
        src: "https://en.wikipedia.org/wiki/Oak"
    },
    
    chefnut: {
        text: "chefnut",
        
        title: "Castanea dentata (American Chestnut Tree)",
        img: "https://extension.psu.edu/media/wysiwyg/extensions/catalog_product/2/9/4be49ec0774b5c94ac12e79d254720/uh1672_8-jp5e95724d54aa7.jpeg",
        imgSize: "small",
        content: [
            <p> The American Chestnut is one of the largest trees in forests of eastern North America, and can grow as high as 100 feet with a trunk diameter of 10 feet. </p>,
            <p> It is best known for its fruit and wood, where the fruit is a sweet nut enclosed in spiny bur, the nut being an important source of food for deers, bears, squirrels, and many other forest animals. </p>,
            <p> Chestnut bark was used for tanning leather and the wood has a low decay rate, thus used for fences, log cabins, barns, and railroad ties. </p>
        ],
        src: "https://extension.psu.edu/from-the-woods-american-chestnut"
    },
    
    whitePine: {
        text: "white pine",
        
        title: "Pinus strobus (Eastern White Pine)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Pinus_strobus_trees.jpg/330px-Pinus_strobus_trees.jpg",
        imgSize: "medium",
        content: [
            <p> Eastern white pine is composed of fine feathery needles, with a straight trunk. They are fast growing (rising up to 80 feet) and long lived. [<a href="https://www.mortonarb.org/trees-plants/tree-plant-descriptions/eastern-white-pine"> src </a>]</p>,
            <p> They are native to eastern North America, and found in the nearctic temperate broadleaf and mixed forests biome of eastern North America. Only one percent of the old forests remain after extensive logging activities from the 18th to 20th century.  </p>,
            <p> White pine needles have higher concentrations of Vitamin C compared to lemons and oranges, and thus was used in herbal tea and certain hair care medicine (with pine tar).</p>
        ],
        src: "https://en.wikipedia.org/wiki/Pinus_strobus"
    },

    
    poplar: {
        text: "poplar",
        
        title: "Populus (Poplar) Trees",
        img: "https://cdn.britannica.com/s:700x500/65/154465-004-6BD3FA57/Fremont-cottonwood-tree-Alamo-Mexico-hardwood-trees.jpg",
        imgSize: "small",
        content: [
            <p> The poplar genus (Populus) consists of 35 species in the Willow family, native to the Northern Hemisphere - North America in 3 groups: cottonwoods, aspens, and the balsam poplars. </p>,
            <p> The name Populus comes from Roman times when the people planted these trees around public meeting places. Poplars grow fast but are short-lived trees, distributed from North America to Eurasia and northern Africa. </p>,
            <p> "Poplars are dioecious plants. Their male and female flowers grow on separate trees and bloom in drooping catkins (pendulous unisexual flower clusters) before the leaves emerge, to facilitate wind pollination."</p>
        ],
        src: "https://www.britannica.com/plant/poplar"
    },

    whiteOak: {
        text: "white oak",
        
        title: "Quercus alba (White Oak)",
        img: "https://shop.arborday.org/data/default/images/catalog/600/Turnkey/1/2-883.jpg",
        imgSize: "medium",
        content: [
            <p> The white oak trees are large, with long horrizontal limbs and short trunk. They pollinate by wind dispersal, and grow at a slow-medium pace between 12 to 24 inches per year </p>,
            <p> These trees can grow up to 80 feet and live for centuries, developing deep roots into the ground but also sensitive to soil compaction and grade changes.</p>,
            <p> Acorns form the white oak are one of the best sources of food for the birds and rodents, while leaf buds are eaten also by birds and deer.</p>
        ],
        src: "https://www.arborday.org/trees/treeguide/TreeDetail.cfm?ItemID=883"
    },
    
    rattleFnake: {
        text: "rattle fnake",
        
        title: "Rattlesnake",
        img: "https://cdn.mos.cms.futurecdn.net/pgWGtfiAeUj6EoSZFAvsKi-970-80.jpg",
        imgSize: "small",
        content: [
            <p> Rattlesnakes are large and venomous, usually found through the Americas and mainly in Southwestern United States & Northern Mexico. </p>,
            <p> Sara Viernum, a herpetologist based in Madison, Wisconsin- explains parts of the snake:  <quote> “Rattles are segments of keratin that fit loosely inside one another at the end of the snake’s tail”. “These segments knock against each other to produce a buzzing sound when the snake holds its tail vertically and vibrates the rattle. Each time a rattlesnake sheds its skin it adds another segment to the rattle.”</quote></p>,
            <p> The rattle and hisses of the snake are clear indications for telling predators to stay away. </p>,
            <p> Rattlesnakes are mostly found in desert sands of the Southwest, grasslands, scrub brush and rocky hills, in the swamplands of the Southeastern United States and in the meadows of the Northeast. </p>
        ],
        src: "https://www.livescience.com/43683-rattlesnake.html"
    },
    
    indianDog: {
        text: "Indian dog",
        
        title: "Native American Indian Dog",
        img: "https://www.dogbreedinfo.com/images25/NativeAmericanIndianDogPurebredFang2YearsOld1.jpg",
        imgSize: "small",
        content: [
            <p> The Native American Indian Dog [NAID] have extremely high intelligence and can be trained easily. </p>,
            <p> They are loyal and protective to it's family and in a pack there is a single leader. </p>,
            <p> NAIDs can weigh from 55 to 120 lbs (25-55 kg), grow to around 23-34 inches (58-67 cm), and live between 14 to 19 years.</p>,
        ],
        src: "https://www.dogbreedinfo.com/nativeamericanindiandog.htm"
    },

    huckleberry: {
        text: "huckleberry",
        title: "Huckleberry",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Huckleberry.jpg/330px-Huckleberry.jpg",
        imgSize: "medium",
        content: [
            <p> Huckleberry is the name used for referencing plants in the Ericaceae family of plants, within genera Vaccinium and Gaylussacia.</p>,
            <p> They grow in subalpine slopes, forests, bogs, and lake basins in the NorthWestern Unite States and Canada.</p>,
            <p> The berries have a tart taste, similar to a blueberry, and were also used as medicine to treat pain, heart ailments, and infections.</p>,
            <p> These berries are eaten by bears, birds, cyotes, and deer.</p>,
        ],
        src: "https://en.wikipedia.org/wiki/Huckleberry"
    },
    
    scuteleria: {
        text: "Scutelaria",
        title: "Scutellaria",
        img: "url",
        imgSize: "small",
        content: [
            <p> Scutellaria, known as skullcaps, is a genus of flowering plants in the family Lamiaceae. Their name is dervied by the Latin word Scutella: "a small dish, tray, or platter", due to the shape of the calyx. </p>,
            <p> Skullcaps have been used in herbal remedies within traditional medicine, such as traditional Chinese medicine to repel "heat-evil and expelling superficial evils".</p>,
            <p> There is an estimate of about 300 to about 425 number of Scutellaria species in the genus range.</p>
        ],
        src: "https://en.wikipedia.org/wiki/Scutellaria"
    },
    
    hickory: {
        text: "hickory",
        title: "Hickory",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Carya_Morton_29-U-10.jpg/330px-Carya_Morton_29-U-10.jpg",
        imgSize: "medium",
        content: [
            <p>Hickory trees have 18 species in the genus Carya, a third of which are native to China, Indochina, and India, with 12 native to the United States.</p>,
            <p><quote>Hickories are deciduous trees with pinnately compound leaves and large nuts. Hickory flowers are small, yellow-green catkins produced in spring. They are wind-pollinated and self-incompatible. </quote></p>,
            <p> Hickory wood is very hard, stiff, dense and shock resistant, also used in bows, carts, lacrosse stick handles, walking sticks, and more. </p> 
        ],
        src: "https://en.wikipedia.org/wiki/Hickory"
    },
    
    pitchPine: {
        text: "pitch pine",
        title: "Pinus rigida (Pitch Pine)",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/2013-05-12_11_23_41_Pitch_Pine_trees_and_view_west_from_the_Hoeferlin_Trail_in_Ramapo_Mountain_State_Forest_in_New_Jersey.jpg/330px-2013-05-12_11_23_41_Pitch_Pine_trees_and_view_west_from_the_Hoeferlin_Trail_in_Ramapo_Mountain_State_Forest_in_New_Jersey.jpg",
        imgSize: "medium",
        content: [
            <p> Pitch pine is native to eastern North America, from central Maine south to Georgia and as far west as Kentucky, and in two pockets along the St. Lawrence River in southern Quebec and Ontario. </p>,
            <p> This pine can grow in acidic, sandy, and low nutrient soil environments & can also hybridize with other pine species. </p>,
            <p>  Pitch Pine will grow rapidly by 1 foot per year, and then have a decreasing rate of growth over time- ending by year 90, with a lifespan of about 200 years</p>
        ],
        src: "https://en.wikipedia.org/wiki/Pinus_rigida"
    },
    
    peachTrees: {
        text: "peach-trees",
        title: "Prunus Persica (Peach Trees)",
        img: "https://www.almanac.com/sites/default/files/styles/primary_image_in_article/public/images/peaches.jpg?itok=xayqoKXj",
        imgSize: "small",
        content: [
            <p> Peach trees grow in Loamy and sandy areas, with slighty to neutral acidic soil pH levels.</p>,
            <p> They are native to the Chinese but brought to the western world through Iran.</p>,
        ],
        src: "https://www.almanac.com/plant/peaches"
    },

    word: {
        text: "word",
        title: "text",
        img: "url",
        imgSize: "small",
        content: [
            <p>text</p>,
        ],
        src: ""
    },

}