report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Card_with_data-qa_card.png",
        "test": "../bitmaps_test/20241007-163010/Card_with_data-qa_card.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Card_with_data-qa_card.png",
        "label": "Card with data-qa_card",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -24
          },
          "rawMisMatchPercentage": 13.872685185185185,
          "misMatchPercentage": "13.87",
          "analysisTime": 10
        },
        "diffImage": "../bitmaps_test/20241007-163010/failed_diff_Card_with_data-qa_card.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Link_with_data-qa_hover.png",
        "test": "../bitmaps_test/20241007-163010/Link_with_data-qa_hover.png",
        "selector": "[data-qa=\"card\"]",
        "fileName": "Link_with_data-qa_hover.png",
        "label": "Link with data-qa_hover",
        "requireSameDimensions": false,
        "misMatchThreshold": 1,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/product-cards/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": 26
          },
          "rawMisMatchPercentage": 11.576036866359447,
          "misMatchPercentage": "11.58",
          "analysisTime": 11
        },
        "diffImage": "../bitmaps_test/20241007-163010/failed_diff_Link_with_data-qa_hover.png"
      },
      "status": "fail"
    }
  ]
});