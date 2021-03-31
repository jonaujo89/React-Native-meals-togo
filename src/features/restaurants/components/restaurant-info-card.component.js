import React from "react";
import { SvgXml } from "react-native-svg";

import {
  Icon,
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Raiting
} from "./restaurant-info-card.styles";
import Spacer from "../../../components/spacer/spacer.component";
import Text from "../../../components/typography/text.component";

import Favorite from "../../../components/favorites/favorite.component";

//icons
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favorite restaurant={restaurant} />
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="title">{name}</Text>
        <Section>
          <Raiting>
            {ratingArray.map((item, index) => (
              <SvgXml
                xml={star}
                width={20}
                height={20}
                key={`star-${placeId}-${index}`}
              />
            ))}
          </Raiting>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Text variant="caption">{address}</Text>
      </Info>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
