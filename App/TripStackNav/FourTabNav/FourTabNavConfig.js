
import {TabNavigator} from "react-navigation";

import {DiscoverStackNav} from "./DiscoverStackNav/DiscoverStackNavConfig";
import {PlannerStackNav} from "./PlannerStackNav/PlannerStackNavConfig";
import MapView from "./MapStackNav/MapView/MapView";
import ToolTileView from "./ToolStackNav/ToolTileView/ToolTileView";

const routeConfig = {
    DiscoverStackNav: { screen: DiscoverStackNav },
    //TODO: CHANGE MultiDayView TO PlannerStackNav
    PlannerStackNav: { screen: PlannerStackNav },
    //TODO: CHANGE MapView TO MapStackView
    MapView: { screen: MapView },
    //TODO: CHANGE ToolTileView TO ToolStackNav
    ToolTileView: { screen: ToolTileView }
};

const tabNavConfig = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        labelStyle: {
            fontSize: 16,
        },
        style: {
            backgroundColor: '#3f8185',
        },
    },
}

export const FourTabNav = TabNavigator(routeConfig, tabNavConfig);
