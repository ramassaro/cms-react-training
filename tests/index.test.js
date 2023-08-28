import Home from "../app/page";
import  Item from '@/components/Item';
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

const item = {
    "id": 1590,
    "digitalId": 0,
    "title": "Official Handbook of the Marvel Universe (2004) #9 (THE WOMEN OF MARVEL)",
    "issueNumber": 9,
    "variantDescription": "THE WOMEN OF MARVEL",
    "description": "",
    "modified": "-0001-11-30T00:00:00-0500",
    "isbn": "",
    "upc": "5960605678-00111",
    "diamondCode": "",
    "ean": "",
    "issn": "",
    "format": "Comic",
    "pageCount": 0,
    "textObjects": [
        {
            "type": "issue_solicit_text",
            "language": "en-us",
            "text": "Marvel's leading ladies take center stage! This Official Handbook includes in-depth bios on more than 40 of the House's most powerful women warriors - from Araña to Vindicator! Plus: an all-new cover by superstar artist Greg Land!"
        }
    ],
    "resourceURI": "http://gateway.marvel.com/v1/public/comics/1590",
    "urls": [
        {
            "type": "detail",
            "url": "http://marvel.com/comics/issue/1590/official_handbook_of_the_marvel_universe_2004_9_the_women_of_marvel/the_women_of_marvel?utm_campaign=apiRef&utm_source=f86e8b52f6159704fdd497ec8830eba7"
        }
    ],
    "series": {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/787",
        "name": "Official Handbook of the Marvel Universe (2004)"
    },
    "variants": [],
    "collections": [],
    "collectedIssues": [],
    "dates": [
        {
            "type": "onsaleDate",
            "date": "2029-12-31T00:00:00-0500"
        },
        {
            "type": "focDate",
            "date": "-0001-11-30T00:00:00-0500"
        }
    ],
    "prices": [
        {
            "type": "printPrice",
            "price": 3.99
        }
    ],
    "thumbnail": {
        "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a",
        "extension": "jpg"
    },
    "images": [
        {
            "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/b0/4c7d666c0e58a",
            "extension": "jpg"
        }
    ],
    "creators": {
        "available": 12,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1590/creators",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/creators/887",
                "name": "Ronald Byrd",
                "role": "writer"
            }
        ],
        "returned": 12
    },
    "characters": {
        "available": 14,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1590/characters",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009156",
                "name": "Apocalypse"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009197",
                "name": "Blink"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
                "name": "Colossus"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009313",
                "name": "Gambit"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009349",
                "name": "Holocaust (Age of Apocalypse)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009417",
                "name": "Magneto"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009447",
                "name": "Mister Sinister"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009546",
                "name": "Rogue"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010969",
                "name": "Sabretooth (Age of Apocalypse)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010975",
                "name": "Shadowcat (Age of Apocalypse)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010976",
                "name": "Silver Samurai (Age of Apocalypse)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010979",
                "name": "Storm (Age of Apocalypse)"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009636",
                "name": "Sunfire"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
                "name": "Wolverine"
            }
        ],
        "returned": 14
    },
    "stories": {
        "available": 2,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1590/stories",
        "items": [
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/4513",
                "name": "Cover #4513",
                "type": "cover"
            },
            {
                "resourceURI": "http://gateway.marvel.com/v1/public/stories/4514",
                "name": "Interior #4514",
                "type": "interiorStory"
            }
        ],
        "returned": 2
    },
    "events": {
        "available": 0,
        "collectionURI": "http://gateway.marvel.com/v1/public/comics/1590/events",
        "items": [],
        "returned": 0
    }
}

describe("Item", () => {
    it("renders a comic item", () => {
      render(<Item key={item.id} data={item}/>);
      // check if all components are rendered
      expect(screen.getByTestId("title")).toBeInTheDocument();
      expect(screen.getByTestId("issue")).toBeInTheDocument();
      expect(screen.getByTestId("published")).toBeInTheDocument();
      expect(screen.getByTestId("creators")).toBeInTheDocument();
    });
  });