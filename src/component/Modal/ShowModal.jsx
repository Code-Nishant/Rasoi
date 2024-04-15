import React from "react";
import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "../../store/modalSlice";
import { FaTimes } from "react-icons/fa";
import useFetchById from "../../hooks/useFetchById";

// icons importing
import { GoDotFill } from "react-icons/go";
import { FaHeart } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { MdPeopleAlt } from "react-icons/md";
import { BiPlusMedical } from "react-icons/bi";

const MyModal = () => {
  const id = useSelector((state) => state.id);
  const payload = id.value.payload;
  // console.log(id.value.payload);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  // console.log(payload);
  const {data, loading, error}=useFetchById(payload)
  // console.log(data)
  const dataa = {
    vegetarian: true,
    vegan: true,
    glutenFree: true,
    dairyFree: true,
    veryHealthy: true,
    cheap: false,
    veryPopular: false,
    sustainable: false,
    lowFodmap: false,
    weightWatcherSmartPoints: 12,
    gaps: "no",
    preparationMinutes: -1,
    cookingMinutes: -1,
    aggregateLikes: 309,
    healthScore: 100,
    creditsText: "blogspot.com",
    sourceName: "blogspot.com",
    pricePerServing: 134.63,
    extendedIngredients: [
      {
        id: 10016049,
        aisle: "Canned and Jarred",
        image: "dry-cannellini-beans.jpg",
        consistency: "SOLID",
        name: "cannellini beans",
        nameClean: "dried cannellini beans",
        original:
          "1 1/4 cups dried cannellini (white kidney) beans (3 3/4 cups cooked)",
        originalName: "1/4 cups dried cannellini (white kidney) beans cooked)",
        amount: 3.75,
        unit: "cups",
        meta: ["dried", "white", "cooked", "( kidney)"],
        measures: {
          us: {
            amount: 3.75,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 757.5,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 93604,
        aisle: "Ethnic Foods",
        image: "curry-leaves.jpg",
        consistency: "SOLID",
        name: "curry leaves",
        nameClean: "curry leaves",
        original: "handful of dried curry leaves, crumbled (or 1 bay leaf)",
        originalName: "dried curry leaves, crumbled (or 1 bay leaf)",
        amount: 1.0,
        unit: "handful",
        meta: ["dried", "crumbled", "(or 1 bay leaf)"],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "handful",
            unitLong: "handful",
          },
          metric: {
            amount: 1.0,
            unitShort: "handful",
            unitLong: "handful",
          },
        },
      },
      {
        id: 2041,
        aisle: "Spices and Seasonings",
        image: "tarragon.jpg",
        consistency: "SOLID",
        name: "tarragon",
        nameClean: "tarragon",
        original: "1/4 cup fresh tarragon",
        originalName: "fresh tarragon",
        amount: 0.25,
        unit: "cup",
        meta: ["fresh"],
        measures: {
          us: {
            amount: 0.25,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 12.75,
            unitShort: "g",
            unitLong: "grams",
          },
        },
      },
      {
        id: 11215,
        aisle: "Produce",
        image: "garlic.png",
        consistency: "SOLID",
        name: "garlic",
        nameClean: "garlic",
        original: "1 clove garlic, minced or crushed",
        originalName: "garlic, minced or crushed",
        amount: 1.0,
        unit: "clove",
        meta: ["minced", "crushed"],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "clove",
            unitLong: "clove",
          },
          metric: {
            amount: 1.0,
            unitShort: "clove",
            unitLong: "clove",
          },
        },
      },
      {
        id: 9152,
        aisle: "Produce",
        image: "lemon-juice.jpg",
        consistency: "LIQUID",
        name: "juice of lemon",
        nameClean: "lemon juice",
        original: "juice from 1 lemon (3 tablespoons)",
        originalName: "juice from 1 lemon",
        amount: 3.0,
        unit: "",
        meta: [],
        measures: {
          us: {
            amount: 3.0,
            unitShort: "",
            unitLong: "",
          },
          metric: {
            amount: 3.0,
            unitShort: "",
            unitLong: "",
          },
        },
      },
      {
        id: 9156,
        aisle: "Produce",
        image: "zest-lemon.jpg",
        consistency: "SOLID",
        name: "lemon zest",
        nameClean: "lemon peel",
        original: "1 teaspoon grated lemon zest",
        originalName: "grated lemon zest",
        amount: 1.0,
        unit: "teaspoon",
        meta: ["grated"],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
          metric: {
            amount: 1.0,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
        },
      },
      {
        id: 4053,
        aisle: "Oil, Vinegar, Salad Dressing",
        image: "olive-oil.jpg",
        consistency: "LIQUID",
        name: "olive oil",
        nameClean: "olive oil",
        original: "1/2 cup olive oil",
        originalName: "olive oil",
        amount: 0.5,
        unit: "cup",
        meta: [],
        measures: {
          us: {
            amount: 0.5,
            unitShort: "cups",
            unitLong: "cups",
          },
          metric: {
            amount: 108.0,
            unitShort: "ml",
            unitLong: "milliliters",
          },
        },
      },

      {
        id: 1002030,
        aisle: "Spices and Seasonings",
        image: "pepper.jpg",
        consistency: "SOLID",
        name: "cracked pepper",
        nameClean: "black pepper",
        original: "fresh cracked black pepper to taste",
        originalName: "fresh cracked black pepper to taste",
        amount: 6.0,
        unit: "servings",
        meta: ["fresh", "black", "to taste"],
        measures: {
          us: {
            amount: 6.0,
            unitShort: "servings",
            unitLong: "servings",
          },
          metric: {
            amount: 6.0,
            unitShort: "servings",
            unitLong: "servings",
          },
        },
      },
      {
        id: 1012047,
        aisle: "Spices and Seasonings",
        image: "salt.jpg",
        consistency: "SOLID",
        name: "sea salt",
        nameClean: "coarse sea salt",
        original: "1 teaspoon sea salt, or to taste",
        originalName: "sea salt, or to taste",
        amount: 1.0,
        unit: "teaspoon",
        meta: ["to taste"],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
          metric: {
            amount: 1.0,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
        },
      },
      {
        id: 11260,
        aisle: "Produce",
        image: "mushrooms.png",
        consistency: "SOLID",
        name: "mushrooms",
        nameClean: "fresh mushrooms",
        original: "8 large white mushrooms, sliced",
        originalName: "white mushrooms, sliced",
        amount: 8.0,
        unit: "large",
        meta: ["white", "sliced"],
        measures: {
          us: {
            amount: 8.0,
            unitShort: "large",
            unitLong: "larges",
          },
          metric: {
            amount: 8.0,
            unitShort: "large",
            unitLong: "larges",
          },
        },
      },
      {
        id: 11260,
        aisle: "Produce",
        image: "mushrooms-white.jpg",
        consistency: "SOLID",
        name: "mushrooms",
        nameClean: "fresh mushrooms",
        original: "8 large white mushrooms, sliced",
        originalName: "white mushrooms, sliced",
        amount: 8.0,
        unit: "large",
        meta: ["white", "sliced"],
        measures: {
          us: {
            amount: 8.0,
            unitShort: "large",
            unitLong: "larges",
          },
          metric: {
            amount: 8.0,
            unitShort: "large",
            unitLong: "larges",
          },
        },
      },
      {
        id: 1012046,
        aisle: "Condiments",
        image: "whole-grain-mustard.png",
        consistency: "LIQUID",
        name: "grain mustard",
        nameClean: "whole grain mustard",
        original: "1 to 1 1/2 teaspoons Dijon or grain mustard, to taste",
        originalName: "Dijon or grain mustard, to taste",
        amount: 1.0,
        unit: "teaspoons",
        meta: ["to taste"],
        measures: {
          us: {
            amount: 1.0,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
          metric: {
            amount: 1.0,
            unitShort: "tsp",
            unitLong: "teaspoon",
          },
        },
      },
    ],
    id: 782585,
    title: "Cannellini Bean and Asparagus Salad with Mushrooms",
    readyInMinutes: 45,
    servings: 6,
    sourceUrl:
      "http://foodandspice.blogspot.com/2016/05/cannellini-bean-and-asparagus-salad.html",
    image: "https://img.spoonacular.com/recipes/782585-556x370.jpg",
    imageType: "jpg",
    taste: {
      sweetness: 24.64,
      saltiness: 86.66,
      sourness: 55.27,
      bitterness: 53.64,
      savoriness: 68.85,
      fattiness: 100.0,
      spiciness: 300000.0,
    },
    summary:
      'Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href="https://spoonacular.com/recipes/cannellini-bean-salad-422994">Cannellini Bean Salad</a>, <a href="https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127">Refreshing Cannellini Bean Salad</a>, and <a href="https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177">Cannellini-and-Green Bean Salad</a>.',
    cuisines: [],
    dishTypes: [
      "side dish",
      "lunch",
      "salad",
      "main course",
      "main dish",
      "dinner",
    ],
    diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
    occasions: [],
    winePairing: {
      pairedWines: ["chardonnay", "sauvignon blanc", "gruener veltliner"],
      pairingText:
        "Chardonnay, Sauvignon Blanc, and Gruener Veltliner are my top picks for Salad. Sauvignon Blanc and Gruner Veltliner both have herby notes that complement salads with enough acid to match tart vinaigrettes, while a Chardonnay can be a good pick for creamy salad dressings. You could try DeLoach Russian River Chardonnay. Reviewers quite like it with a 4.6 out of 5 star rating and a price of about 18 dollars per bottle.",
      productMatches: [
        {
          id: 433197,
          title: "DeLoach Russian River Chardonnay",
          description:
            "De Loach Vineyards Russian River ValleyChardonnay displays distinctive characteristics true tothe appellation; rich, ripe fruit and firm acidity. Itsconcentrated aromas and flavors of pear, apple andvanilla are complemented nicely by toasty oakcomponents. This elegant wine is rich and clean with asmooth, long-lasting finish.",
          price: "$17.99",
          imageUrl: "https://img.spoonacular.com/products/433197-312x231.jpg",
          averageRating: 0.9200000166893005,
          ratingCount: 6.0,
          score: 0.8674,
          link: "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fdeloach-russian-river-chardonnay-2001%2F61900",
        },
      ],
    },
    instructions:
      "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water. Drain and rinse, then transfer to a medium saucepan and cover with fresh water. Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart. Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch. Transfer to the salad bowl.Now cook the mushrooms. Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid. Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.Pour the dressing over the salad, season with salt and pepper, and toss. Serve at room temperature or chilled.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
            ingredients: [
              {
                id: 10716050,
                name: "cannellini beans",
                localizedName: "cannellini beans",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/cooked-cannellini-beans.png",
              },
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/water.png",
              },
            ],
            equipment: [],
            length: {
              number: 480,
              unit: "minutes",
            },
          },
          {
            number: 2,
            step: "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
            ingredients: [
              {
                id: 14412,
                name: "water",
                localizedName: "water",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/water.png",
              },
            ],
            equipment: [
              {
                id: 404669,
                name: "sauce pan",
                localizedName: "sauce pan",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/sauce-pan.jpg",
              },
            ],
          },
          {
            number: 3,
            step: "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
            ingredients: [
              {
                id: 93604,
                name: "curry leaves",
                localizedName: "curry leaves",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/curry-leaves.jpg",
              },
              {
                id: 2004,
                name: "bay leaves",
                localizedName: "bay leaves",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/bay-leaves.jpg",
              },
              {
                id: 0,
                name: "beans",
                localizedName: "beans",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/kidney-beans.jpg",
              },
            ],
            equipment: [],
            length: {
              number: 60,
              unit: "minutes",
            },
          },
          {
            number: 4,
            step: "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
            ingredients: [
              {
                id: 11011,
                name: "asparagus",
                localizedName: "asparagus",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/asparagus.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
              },
            ],
            length: {
              number: 6,
              unit: "minutes",
            },
          },
          {
            number: 5,
            step: "Transfer to the salad bowl.Now cook the mushrooms.",
            ingredients: [
              {
                id: 11260,
                name: "mushrooms",
                localizedName: "mushrooms",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/mushrooms.png",
              },
            ],
            equipment: [
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
              },
            ],
          },
          {
            number: 6,
            step: "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
            ingredients: [
              {
                id: 11260,
                name: "mushrooms",
                localizedName: "mushrooms",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/mushrooms.png",
              },
              {
                id: 4582,
                name: "cooking oil",
                localizedName: "cooking oil",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/vegetable-oil.jpg",
              },
            ],
            equipment: [
              {
                id: 404645,
                name: "frying pan",
                localizedName: "frying pan",
                image: "https://spoonacular.com/cdn/equipment_100x100/pan.png",
              },
            ],
            length: {
              number: 5,
              unit: "minutes",
            },
          },
          {
            number: 7,
            step: "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
            ingredients: [
              {
                id: 9152,
                name: "lemon juice",
                localizedName: "lemon juice",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/lemon-juice.jpg",
              },
              {
                id: 9156,
                name: "lemon zest",
                localizedName: "lemon zest",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/zest-lemon.jpg",
              },
              {
                id: 11011,
                name: "asparagus",
                localizedName: "asparagus",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/asparagus.png",
              },
              {
                id: 4053,
                name: "olive oil",
                localizedName: "olive oil",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/olive-oil.jpg",
              },
              {
                id: 2041,
                name: "tarragon",
                localizedName: "tarragon",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/tarragon.jpg",
              },
              {
                id: 2046,
                name: "mustard",
                localizedName: "mustard",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/regular-mustard.jpg",
              },
              {
                id: 11215,
                name: "garlic",
                localizedName: "garlic",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/garlic.png",
              },
            ],
            equipment: [
              {
                id: 404771,
                name: "food processor",
                localizedName: "food processor",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/food-processor.png",
              },
              {
                id: 404726,
                name: "blender",
                localizedName: "blender",
                image:
                  "https://spoonacular.com/cdn/equipment_100x100/blender.png",
              },
              {
                id: 404783,
                name: "bowl",
                localizedName: "bowl",
                image: "https://spoonacular.com/cdn/equipment_100x100/bowl.jpg",
              },
            ],
          },
          {
            number: 8,
            step: "Pour the dressing over the salad, season with salt and pepper, and toss.",
            ingredients: [
              {
                id: 1102047,
                name: "salt and pepper",
                localizedName: "salt and pepper",
                image:
                  "https://spoonacular.com/cdn/ingredients_100x100/salt-and-pepper.jpg",
              },
            ],
            equipment: [],
          },
          {
            number: 9,
            step: "Serve at room temperature or chilled.",
            ingredients: [],
            equipment: [],
          },
        ],
      },
    ],
    originalId: null,
    spoonacularScore: 99.53763580322266,
    spoonacularSourceUrl:
      "https://spoonacular.com/cannellini-bean-and-asparagus-salad-with-mushrooms-782585",
  };

  return (
    <>
      <div className="modal-wrapper" onClick={() => dispatch(hide())}></div>
      <div className="modal-container">
        {/* {payload} */}
        <div className="close-button" onClick={() => dispatch(hide())}>
          <FaTimes />
        </div>

        <div className="main">
          <div className="main_label">
            <h2>{data?.title}</h2>
            {/* <h5>Cuisine</h5> */}
          </div>

          <div className="center">
            <div className="left">
              <div className="content">
                <div className="image">
                  <img src={data?.image} alt="" />
                </div>

                <div className="details">
                  <div className="item veg">
                    <div className="icon">
                      {data?.vegetarian ? (
                        <GoDotFill className="green" />
                      ) : (
                        <GoDotFill className="red" />
                      )}
                    </div>
                    <div className="des">
                      <p>
                        {data?.vegetarian ? "Vegetarian" : "Non-Vegetarian"}
                      </p>
                    </div>
                  </div>
                  <div className="item like">
                    <div className="icon">
                      <FaHeart />
                    </div>
                    <div className="des">
                      <p>{data?.aggregateLikes}</p>
                    </div>
                  </div>
                  <div className="item health">
                    <div className="icon">
                      <BiPlusMedical />
                    </div>
                    <div className="des">
                      <p>{data?.healthScore}</p>
                    </div>
                  </div>
                  <div className="item time">
                    <div className="icon">
                      <FaClock />
                    </div>
                    <div className="des">
                      <p>{data?.readyInMinutes} mins</p>
                    </div>
                  </div>
                  <div className="item serving">
                    <div className="icon">
                      <MdPeopleAlt />
                    </div>
                    <div className="des">
                      <p>{data?.servings}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="summary">
                <h5>Recipe Description</h5>
                <p dangerouslySetInnerHTML={{ __html: data?.summary }}></p>
              </div>
            </div>
            <div className="right">
              <div className="ingredients">
                <h5>Ingredients</h5>
                <div className="inner_ingredients">
                  <ol>
                    {data?.extendedIngredients.map((item, key) => {
                      return (
                        <li key={key} className="ingredient">
                          <h6 className="name">{item.nameClean}</h6>
                          <p className="quantity">{item.originalName}</p>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cooking">
          <h5>How to Cook</h5>
          <div className="instruction">
            <ol>
              {data?.analyzedInstructions[0].steps.map((item, key) => {
                return <li key={key}>{item.step}</li>;
              })}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(MyModal);
