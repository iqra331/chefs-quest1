const recipes = [
    { 
        name: "Chicken Biryani", 
        ingredients: ["Chicken", "Rice", "Spices", "Yogurt", "Onions", "Tomatoes"], 
        procedure: `
            1. Marinate chicken with yogurt and spices for at least 1 hour.
            2. Heat oil in a pot and sauté sliced onions until golden brown.
            3. Add tomatoes and cook until they soften.
            4. Add marinated chicken and cook until it’s fully done.
            5. In a separate pot, cook rice until 70% done.
            6. Layer the partially cooked rice over the chicken in the pot.
            7. Sprinkle additional spices and garnish with fried onions and herbs.
            8. Cover and cook on low heat until rice is fully cooked and flavors meld together.
        ` 
    },
    { 
        name: "Paneer Butter Masala", 
        ingredients: ["Paneer", "Butter", "Cream", "Tomatoes", "Spices", "Onions"], 
        procedure: `
            1. Heat butter in a pan and sauté finely chopped onions until translucent.
            2. Add chopped tomatoes and cook until they break down into a sauce.
            3. Add spices and cook for a few more minutes.
            4. Add cream and mix well.
            5. Cut paneer into cubes and add to the sauce.
            6. Simmer until paneer is heated through and the flavors blend.
        ` 
    },
    { 
        name: "Chole Bhature", 
        ingredients: ["Chickpeas", "Flour", "Yogurt", "Onions", "Tomatoes", "Spices"], 
        procedure: `
            1. Soak chickpeas overnight and then cook them with spices and onions until tender.
            2. For the bhature, mix flour, yogurt, and a bit of baking powder to make a dough.
            3. Roll out the dough into circles and deep fry until puffed and golden.
            4. Serve the chole with hot bhature.
        ` 
    },
    { 
        name: "Aloo Gobi", 
        ingredients: ["Potatoes", "Cauliflower", "Spices", "Onions", "Tomatoes"], 
        procedure: `
            1. Heat oil in a pan and sauté onions until golden.
            2. Add chopped tomatoes and cook until soft.
            3. Add spices and mix well.
            4. Add chopped potatoes and cauliflower.
            5. Cover and cook until vegetables are tender, stirring occasionally.
        ` 
    },
    { 
        name: "Palak Paneer", 
        ingredients: ["Paneer", "Spinach", "Cream", "Spices", "Onions"], 
        procedure: `
            1. Blanch spinach in boiling water and then blend into a smooth paste.
            2. Heat oil and sauté onions until golden.
            3. Add the spinach paste and spices, and cook for a few minutes.
            4. Add paneer cubes and cream.
            5. Simmer until the paneer is heated through and the flavors meld.
        ` 
    },
    { 
        name: "Dosa", 
        ingredients: ["Rice", "Urad Dal", "Fenugreek", "Salt"], 
        procedure: `
            1. Soak rice, urad dal, and fenugreek seeds in water for 6-8 hours.
            2. Grind the mixture into a smooth batter and let it ferment overnight.
            3. Heat a non-stick pan or griddle and pour a ladleful of batter, spreading it into a thin circle.
            4. Cook until crispy and golden on both sides.
        ` 
    },
    { 
        name: "Samosa", 
        ingredients: ["Potatoes", "Peas", "Spices", "Flour"], 
        procedure: `
            1. Prepare the filling by boiling potatoes and peas, then mash and mix with spices.
            2. Make a dough from flour, roll it out, and cut into squares.
            3. Place a spoonful of filling in the center of each square, fold, and seal the edges.
            4. Deep fry until golden and crispy.
        ` 
    },
    { 
        name: "Butter Chicken", 
        ingredients: ["Chicken", "Butter", "Tomatoes", "Cream", "Spices"], 
        procedure: `
            1. Marinate chicken in yogurt and spices for a few hours.
            2. Heat butter in a pan and cook the marinated chicken until done.
            3. Add tomatoes and cook until they break down into a sauce.
            4. Stir in cream and cook for a few more minutes.
        ` 
    },
    { 
        name: "Rogan Josh", 
        ingredients: ["Lamb", "Yogurt", "Spices", "Onions", "Tomatoes"], 
        procedure: `
            1. Brown lamb pieces in a pot with oil.
            2. Add onions and cook until they soften.
            3. Stir in spices and cook for a minute.
            4. Add tomatoes and cook until they break down.
            5. Add yogurt and simmer until lamb is tender and the sauce is thickened.
        ` 
    },
    { 
        name: "Dal Tadka", 
        ingredients: ["Lentils", "Tomatoes", "Spices", "Onions", "Garlic"], 
        procedure: `
            1. Cook lentils with water until soft.
            2. Heat oil in a pan, add onions and garlic, and sauté until golden.
            3. Add tomatoes and spices, cook until the mixture thickens.
            4. Add the cooked lentils to the pan and mix well.
        ` 
    },
    { 
        name: "Rava Kesari", 
        ingredients: ["Semolina", "Sugar", "Ghee", "Cashews", "Raisins"], 
        procedure: `
            1. Heat ghee in a pan and roast semolina until golden.
            2. Add sugar and water, and cook until the mixture thickens.
            3. Garnish with fried cashews and raisins.
        ` 
    },
    { 
        name: "Pani Puri", 
        ingredients: ["Semolina", "Flour", "Tamarind", "Chickpeas", "Spices"], 
        procedure: `
            1. Prepare puris by mixing semolina and flour into a dough, roll thin, and deep fry until puffed.
            2. Prepare tamarind water by boiling tamarind with spices and straining.
            3. Serve puris with tamarind water and chickpea filling.
        ` 
    },
    { 
        name: "Idli", 
        ingredients: ["Rice", "Urid Dal", "Fermentation Starter"], 
        procedure: `
            1. Soak rice and urid dal separately for 6-8 hours.
            2. Grind to a smooth batter and let it ferment overnight.
            3. Pour batter into idli molds and steam until cooked.
        ` 
    },
    { 
        name: "Kofta Curry", 
        ingredients: ["Potatoes", "Paneer", "Spices", "Tomatoes", "Onions"], 
        procedure: `
            1. Mix mashed potatoes and grated paneer with spices and form into balls.
            2. Deep fry the koftas until golden.
            3. Prepare a curry with tomatoes, onions, and spices.
            4. Add koftas to the curry and simmer for a few minutes.
        ` 
    },
    { 
        name: "Baingan Bharta", 
        ingredients: ["Eggplant", "Tomatoes", "Onions", "Spices"], 
        procedure: `
            1. Roast eggplant over an open flame until the skin is charred and the flesh is soft.
            2. Peel and mash the eggplant.
            3. Heat oil, add onions and tomatoes, and cook until soft.
            4. Add spices and the mashed eggplant, cook for a few more minutes.
        ` 
    },
    { 
        name: "Pulao", 
        ingredients: ["Rice", "Vegetables", "Spices", "Onions"], 
        procedure: `
            1. Heat oil in a pan and sauté onions until golden.
            2. Add chopped vegetables and spices, and cook for a few minutes.
            3. Add rice and water, bring to a boil, then reduce heat and simmer until rice is cooked.
        ` 
    },
    { 
        name: "Kheer", 
        ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Nuts"], 
        procedure: `
            1. Cook rice in milk over a low flame until soft.
            2. Add sugar and cardamom, and cook until the mixture thickens.
            3. Garnish with nuts and serve warm or chilled.
        ` 
    },
    { 
        name: "Methi Thepla", 
        ingredients: ["Whole Wheat Flour", "Fenugreek Leaves", "Spices"], 
        procedure: `
            1. Mix finely chopped fenugreek leaves into whole wheat flour.
            2. Add spices and water to form a smooth dough.
            3. Roll out the dough into thin circles and cook on a griddle until golden brown on both sides.
        ` 
    },
    { 
        name: "Prawn Masala", 
        ingredients: ["Prawns", "Tomatoes", "Spices", "Onions"], 
        procedure: `
            1. Heat oil in a pan and sauté onions until golden.
            2. Add tomatoes and cook until they break down into a sauce.
            3. Add spices and prawns, and cook until prawns are pink and cooked through.
        ` 
    },
    { 
        name: "Vegetable Biryani", 
        ingredients: ["Rice", "Mixed Vegetables", "Spices", "Yogurt"], 
        procedure: `
            1. Cook rice partially and set aside.
            2. Prepare a spiced vegetable mix with mixed vegetables and yogurt.
            3. Layer partially cooked rice over the vegetable mix.
            4. Cook covered on low heat until rice is fully cooked and flavors meld.
        ` 
    },
    { 
        name: "Aloo Paratha", 
        ingredients: ["Whole Wheat Flour", "Potatoes", "Spices"], 
        procedure: `
            1. Prepare a dough from whole wheat flour.
            2. Make a spiced mashed potato filling.
            3. Roll out dough, stuff with filling, and seal the edges.
            4. Roll out again and cook on a griddle with ghee until golden brown on both sides.
        ` 
    },
    { 
        name: "Mutton Curry", 
        ingredients: ["Mutton", "Tomatoes", "Spices", "Yogurt"], 
        procedure: `
            1. Brown mutton pieces in a pot with oil.
            2. Add onions and cook until golden.
            3. Add tomatoes and spices, and cook until tomatoes break down.
            4. Stir in yogurt and simmer until mutton is tender.
        ` 
    },
    { 
        name: "Methi Malai Chicken", 
        ingredients: ["Chicken", "Fenugreek Leaves", "Cream", "Spices"], 
        procedure: `
            1. Heat oil in a pan and cook chicken until it starts to brown.
            2. Add chopped fenugreek leaves and cook until aromatic.
            3. Stir in cream and spices, and simmer until chicken is cooked through.
        ` 
    },
    { 
        name: "Kachori", 
        ingredients: ["Flour", "Lentils", "Spices"], 
        procedure: `
            1. Prepare a filling by cooking lentils with spices until thick.
            2. Make a dough from flour and water.
            3. Stuff dough with the filling and shape into round balls.
            4. Deep fry until golden and crispy.
        ` 
    },
    { 
        name: "Bhindi Masala", 
        ingredients: ["Okra", "Tomatoes", "Spices", "Onions"], 
        procedure: `
            1. Slice okra and sauté in oil until slightly crispy.
            2. Add onions and cook until soft.
            3. Stir in tomatoes and spices, and cook until tomatoes break down.
            4. Mix in the sautéed okra and cook for a few more minutes.
        ` 
    },
    { 
        name: "Palak Chole", 
        ingredients: ["Chickpeas", "Spinach", "Spices", "Onions", "Tomatoes"], 
        procedure: `
            1. Cook chickpeas with onions, tomatoes, and spices until tender.
            2. Add spinach and cook until wilted.
            3. Simmer until flavors meld together.
        ` 
    },
    { 
        name: "Rava Dosa", 
        ingredients: ["Semolina", "Rice Flour", "Spices", "Onions"], 
        procedure: `
            1. Mix semolina, rice flour, and spices with water to form a thin batter.
            2. Heat a griddle and pour a thin layer of batter.
            3. Cook until crispy and golden on both sides.
        ` 
    },
    { 
        name: "Kadhi Pakora", 
        ingredients: ["Yogurt", "Chickpea Flour", "Spices", "Onions"], 
        procedure: `
            1. Prepare the kadhi by mixing yogurt with chickpea flour and spices, and cook until thick.
            2. For pakoras, mix chickpea flour with spices and onions, and deep fry spoonfuls of the mixture.
            3. Add the pakoras to the kadhi and simmer.
        ` 
    },
    { 
        name: "Rajma", 
        ingredients: ["Kidney Beans", "Tomatoes", "Spices", "Onions"], 
        procedure: `
            1. Cook kidney beans with onions, tomatoes, and spices until tender.
            2. Simmer until the sauce thickens and flavors meld.
        ` 
    },
    { 
        name: "Mango Lassi", 
        ingredients: ["Mango", "Yogurt", "Sugar", "Cardamom"], 
        procedure: `
            1. Blend mangoes with yogurt, sugar, and cardamom until smooth.
            2. Serve chilled.
        ` 
    },
    { 
        name: "Jeera Rice", 
        ingredients: ["Rice", "Cumin Seeds", "Onions", "Spices"], 
        procedure: `
            1. Heat oil in a pan, add cumin seeds, and sauté until fragrant.
            2. Add onions and cook until golden.
            3. Add rice and water, and cook until rice is tender.
        ` 
    },
    { 
        name: "Paneer Tikka", 
        ingredients: ["Paneer", "Yogurt", "Spices", "Vegetables"], 
        procedure: `
            1. Marinate paneer and vegetables in yogurt and spices for at least 1 hour.
            2. Skewer the paneer and vegetables.
            3. Grill or bake until charred and cooked through.
        ` 
    },
    { 
        name: "Halwa", 
        ingredients: ["Semolina", "Sugar", "Ghee", "Nuts"], 
        procedure: `
            1. Roast semolina in ghee until golden.
            2. Add sugar and water, and cook until thickened.
            3. Garnish with nuts and serve.
        ` 
    },
    { 
        name: "Dhokla", 
        ingredients: ["Gram Flour", "Yogurt", "Spices", "Mustard Seeds"], 
        procedure: `
            1. Prepare a batter with gram flour and yogurt.
            2. Steam the batter in a greased pan until cooked through.
            3. Temper with mustard seeds and curry leaves.
        ` 
    },
    { 
        name: "Pesarattu", 
        ingredients: ["Green Gram", "Rice", "Ginger", "Spices"], 
        procedure: `
            1. Soak green gram and rice together for a few hours.
            2. Grind into a smooth batter with ginger and spices.
            3. Cook on a hot griddle like a dosa.
        ` 
    },
    { 
        name: "Coconut Chutney", 
        ingredients: ["Coconut", "Green Chilies", "Mustard Seeds", "Spices"], 
        procedure: `
            1. Blend coconut with green chilies and spices into a smooth paste.
            2. Temper with mustard seeds and curry leaves.
        ` 
    },
    { 
        name: "Aloo Jeera", 
        ingredients: ["Potatoes", "Cumin Seeds", "Spices"], 
        procedure: `
            1. Heat oil and add cumin seeds.
            2. Add diced potatoes and spices, and cook until potatoes are tender.
        ` 
    },
    { 
        name: "Sambhar", 
        ingredients: ["Lentils", "Mixed Vegetables", "Tamarind", "Spices"], 
        procedure: `
            1. Cook lentils with mixed vegetables and tamarind until soft.
            2. Temper with spices and curry leaves.
        ` 
    },
    { 
        name: "Gulab Jamun", 
        ingredients: ["Milk Powder", "Sugar", "Ghee", "Cardamom"], 
        procedure: `
            1. Make a dough from milk powder, shape into balls, and deep fry until golden.
            2. Soak the fried balls in warm sugar syrup flavored with cardamom.
        ` 
    },
    { 
        name: "Methi Thepla", 
        ingredients: ["Whole Wheat Flour", "Fenugreek Leaves", "Spices"], 
        procedure: `
            1. Mix finely chopped fenugreek leaves and spices into whole wheat flour.
            2. Add water and knead to form a smooth dough.
            3. Roll out into thin circles and cook on a hot griddle until both sides are golden brown.
        ` 
    }
    // Add more recipes here as needed
];
