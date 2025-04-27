import { LocationInfo } from "./LocationInfo"
import { TempratureInfo } from "./TempratureInfo"

export interface CityWeather{
    location: LocationInfo,
    current: TempratureInfo
}