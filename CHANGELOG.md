# Changelog

## [5.0.0] - 2026-02-25

⚠️ This major release contains new, redesigned, and renamed icons that may affect your setup. A machine-readable version of the icon upgrade paths can be found in the [`changelog.json`](/metadata/changelog.json) file.

### Added icons

- <img src="https://pinhead.ink/v5/clothes_hanger_holding_cloth.svg" width="15px"/> Add `clothes_hanger_holding_cloth`
- <img src="https://pinhead.ink/v5/badge_shield_with_star.svg" width="15px"/> Add `badge_shield_with_star`

Added icons from or inspired by [OpenStreetMap Americana](https://github.com/osm-americana/openstreetmap-americana) (CC0):

- <img src="https://pinhead.ink/v5/f22_raptor_fighter_jet.svg" width="15px"/> Add `f22_raptor_fighter_jet`
- <img src="https://pinhead.ink/v5/hospital_h.svg" width="15px"/> Add `hospital_h`
- <img src="https://pinhead.ink/v5/bus.svg" width="15px"/> Add `bus`
- <img src="https://pinhead.ink/v5/dome_with_flag.svg" width="15px"/> Add `dome_with_flag`
- <img src="https://pinhead.ink/v5/book_with_raised_cover.svg" width="15px"/> Add `book_with_raised_cover`
- <img src="https://pinhead.ink/v5/memorial_stone.svg" width="15px"/> Add `memorial_stone`
- <img src="https://pinhead.ink/v5/badge_shield.svg" width="15px"/> Add `badge_shield`
- <img src="https://pinhead.ink/v5/badge_shield_with_fire.svg" width="15px"/> Add `badge_shield_with_fire`
- <img src="https://pinhead.ink/v5/circle_outline_with_star.svg" width="15px"/> Add `circle_outline_with_star`
- <img src="https://pinhead.ink/v5/cocktail_with_straw.svg" width="15px"/> Add `cocktail_with_straw`
- <img src="https://pinhead.ink/v5/fork_crossing_knife.svg" width="15px"/> Add `fork_crossing_knife`
- <img src="https://pinhead.ink/v5/sleepers_in_opposing_bunkbeds.svg" width="15px"/> Add `sleepers_in_opposing_bunkbeds`
- <img src="https://pinhead.ink/v5/square_dot.svg" width="15px"/> Add `square_dot`
- <img src="https://pinhead.ink/v5/pennant_on_square.svg" width="15px"/> Add `pennant_on_square`
- <img src="https://pinhead.ink/v5/star_and_crescent_on_square.svg" width="15px"/> Add `star_and_crescent_on_square`
- <img src="https://pinhead.ink/v5/latin_cross_on_square.svg" width="15px"/> Add `latin_cross_on_square`
- <img src="https://pinhead.ink/v5/flaming_chalice.svg" width="15px"/> Add `flaming_chalice`
- <img src="https://pinhead.ink/v5/flaming_chalice_on_square.svg" width="15px"/> Add `flaming_chalice_on_square`
- <img src="https://pinhead.ink/v5/quaker_star_on_square.svg" width="15px"/> Add `quaker_star_on_square`
- <img src="https://pinhead.ink/v5/star_of_david.svg" width="15px"/> Add `star_of_david`
- <img src="https://pinhead.ink/v5/star_of_david_filled_outline.svg" width="15px"/> Add `star_of_david_filled_outline`
- <img src="https://pinhead.ink/v5/star_of_david_on_square.svg" width="15px"/> Add `star_of_david_on_square`
- <img src="https://pinhead.ink/v5/dharma_wheel_on_square.svg" width="15px"/> Add `dharma_wheel_on_square`
- <img src="https://pinhead.ink/v5/yin_yang_on_square.svg" width="15px"/> Add `yin_yang_on_square`
- <img src="https://pinhead.ink/v5/torii_on_square.svg" width="15px"/> Add `torii_on_square`
- <img src="https://pinhead.ink/v5/khanda_on_square.svg" width="15px"/> Add `khanda_on_square`
- <img src="https://pinhead.ink/v5/om_on_square.svg" width="15px"/> Add `om_on_square`

### Renamed and redesigned icons

- <img src="https://pinhead.ink/v4/inscribed_memorial_stone.svg" width="15px"/> `inscribed_memorial_stone` -> <img src="https://pinhead.ink/v5/memorial_stone_with_inscription.svg" width="15px"/> `memorial_stone_with_inscription`

### Renamed icons

- <img src="https://pinhead.ink/v5/star_of_david_filled.svg" width="15px"/> `star_of_david` -> `star_of_david_filled`


## [4.0.0] - 2026-02-24

⚠️ This major release contains new, redesigned, and renamed icons that may affect your setup. A machine-readable version of the icon upgrade paths can be found in the [`changelog.json`](/metadata/changelog.json) file. This update also include a breaking change for developers that relied on the `migrations.json` file.

### New icons

- <img src="https://pinhead.ink/v4/loaf_of_bread_with_steam.svg" width="15px"/> Add `loaf_of_bread_with_steam`
- <img src="https://pinhead.ink/v4/loaf_of_pan_bread.svg" width="15px"/> Add `loaf_of_pan_bread`
- <img src="https://pinhead.ink/v4/loaf_of_pan_bread_with_steam.svg" width="15px"/> Add `loaf_of_pan_bread_with_steam`
- <img src="https://pinhead.ink/v4/station_wagon.svg" width="15px"/> Add `station_wagon`
- <img src="https://pinhead.ink/v4/station_wagon_with_raised_hood.svg" width="15px"/> Add `station_wagon_with_raised_hood`
- <img src="https://pinhead.ink/v4/car_with_taxi_checkerboard.svg" width="15px"/> Add `car_with_taxi_checkerboard`
- <img src="https://pinhead.ink/v4/cabin.svg" width="15px"/> Add `cabin`

### Renamed and redesigned icons

- <img src="https://pinhead.ink/v3/bread.svg" width="15px"/> `bread` -> <img src="https://pinhead.ink/v4/loaf_of_bread.svg" width="15px"/> `loaf_of_bread`

### Renamed icons

- <img src="https://pinhead.ink/v4/sedan.svg" width="15px"/> Rename `car_profile` -> `sedan`
- <img src="https://pinhead.ink/v4/sedan_with_raised_hood.svg" width="15px"/> Rename `car_profile_with_raised_hood` -> `sedan_with_raised_hood`
- <img src="https://pinhead.ink/v4/cabin_with_chimney.svg" width="15px"/> Rename `cabin` -> `cabin_with_chimney`

### Developer changes

- ⚠️ Rename `migrations.json` to [`changelog.json`](/metadata/changelog.json) file and alter format
  - Add contributor credit
  - Add mappings to source icon sets (Maki, Temaki, etc.)
  - Add data for v1 icons 
- Ensure that all SVGs contain one and only one closed `path` element

### Docs

- Add [pinhead.ink/coverage](https://pinhead.ink/coverage) page with visual comparison between icon libraries

## [3.0.0] - 2026-02-21

⚠️ This major release contains new, redesigned, and renamed icons that may affect your setup. A machine-readable version of the icon upgrade paths can be found in the [`migrations.json`](/migrations.json) file.

### New icons

- <img src="https://pinhead.ink/v3/maple_leaf.svg" width="15px"/> Add `maple_leaf`
- <img src="https://pinhead.ink/v3/car_profile.svg" width="15px"/> Add `car_profile`
- <img src="https://pinhead.ink/v3/car_profile_with_raised_hood.svg" width="15px"/> Add `car_profile_with_raised_hood`
- <img src="https://pinhead.ink/v3/compact_box_truck.svg" width="15px"/> Add `compact_box_truck`
- <img src="https://pinhead.ink/v3/compact_box_truck_with_greek_cross.svg" width="15px"/> Add `compact_box_truck_with_greek_cross`
- <img src="https://pinhead.ink/v3/compact_box_truck_with_heavy_six_point_asterisk.svg" width="15px"/> Add `compact_box_truck_with_heavy_six_point_asterisk`
- <img src="https://pinhead.ink/v3/flatbed_truck.svg" width="15px"/> Add `flatbed_truck`
- <img src="https://pinhead.ink/v3/pickup_truck.svg" width="15px"/> Add `pickup_truck`
- <img src="https://pinhead.ink/v3/pickup_truck_with_crates.svg" width="15px"/> Add `pickup_truck_with_crates`
- <img src="https://pinhead.ink/v3/pickup_truck_with_raised_hood.svg" width="15px"/> Add `pickup_truck_with_raised_hood`
- <img src="https://pinhead.ink/v3/mobile_phone_with_keypad_and_antenna_and_wifi.svg" width="15px"/> Add `mobile_phone_with_keypad_and_antenna_and_wifi`
- <img src="https://pinhead.ink/v3/mobile_phone_with_touchscreen_and_antenna_and_wifi.svg" width="15px"/> Add `mobile_phone_with_touchscreen_and_antenna_and_wifi`

### Redesigned icons

- <img src="https://pinhead.ink/v2/wifi.svg" width="15px"/> -> <img src="https://pinhead.ink/v3/wifi.svg" width="15px"/> Update `wifi` to be simpler and bolder, and therefore more legible at smaller sizes and easier to combine with other icons

### Renamed and redesigned icons

- <img src="https://pinhead.ink/v2/truck_profile.svg" width="15px"/> `truck_profile` -> <img src="https://pinhead.ink/v3/box_truck.svg" width="15px"/> `box_truck`

## [2.1.1] - 2026-02-20

### Developer changes

- List added icons in [`migrations.json`](/migrations.json) file
- Include `migrations.json` file in the distribution

## [2.1.0] - 2026-02-20

### Developer changes

- Remove unnecessary `<?xml version="1.0" encoding="UTF-8"?>` declarations from every icon
- Remove unnecessary `version="1.1"` and `xmlns:xlink="http://www.w3.org/1999/xlink"` attributes from `<svg>` element of every icon

## [2.0.0] - 2026-02-20

⚠️ This major release contains new, redesigned, and renamed icons that may affect your setup. A machine-readable version of the icon upgrade paths can be found in the [`migrations.json`](/migrations.json) file.

### New icons

- <img src="https://pinhead.ink/v2/turtle_top.svg" width="15px"/> Add `turtle_top`
- <img src="https://pinhead.ink/v2/arrow_down_to_down_bracket.svg" width="15px"/> Add `arrow_down_to_down_bracket`
- <img src="https://pinhead.ink/v2/arrow_up_to_up_bracket.svg" width="15px"/> Add `arrow_up_to_up_bracket`
- <img src="https://pinhead.ink/v2/arrow_left_to_left_bracket.svg" width="15px"/> Add `arrow_left_to_left_bracket`

### Redesigned icons

- <img src="https://pinhead.ink/v1/arrow_right_to_right_bracket.svg" width="15px"/> -> <img src="https://pinhead.ink/v2/arrow_right_to_right_bracket.svg" width="15px"/> Update `arrow_right_to_right_bracket` thickness to match similar arrow icons

### Renamed icons

Various icons have been renamed due to issues found in the initial release. 

- <img src="https://pinhead.ink/v2/latin_cross.svg" width="15px"/> Rename `cross_latin` -> `latin_cross` for consistency with `greek_cross`
- <img src="https://pinhead.ink/v2/flower_bouquet.svg" width="15px"/> Rename `flower_boquette` -> `flower_bouquet` to fix spelling
- <img src="https://pinhead.ink/v2/plant_in_raised_planter.svg" width="15px"/> Rename `plan_in_raised_planter` -> `plant_in_raised_planter` to fix typo
- Rename various transit icons for consistency
  - <img src="https://pinhead.ink/v2/hanging_rail_transit_vehicle_with_destination_display.svg" width="15px"/> `hanging_rail_transit_vehicle` -> `hanging_rail_transit_vehicle_with_destination_display`
  - <img src="https://pinhead.ink/v2/transit_vehicle_with_destination_display.svg" width="15px"/> `local_transit_vehicle` -> `transit_vehicle_with_destination_display`
  - <img src="https://pinhead.ink/v2/monorail_transit_vehicle_with_destination_display.svg" width="15px"/> `monorail_transit_vehicle` -> `monorail_transit_vehicle_with_destination_display`
  - <img src="https://pinhead.ink/v2/person_boarding_bus_with_destination_display.svg" width="15px"/> `person_boarding_bus` -> `person_boarding_bus_with_destination_display`
  - <img src="https://pinhead.ink/v2/person_boarding_hanging_rail_transit_vehicle_with_destination_display.svg" width="15px"/> `person_boarding_hanging_rail_transit_vehicle` -> `person_boarding_hanging_rail_transit_vehicle_with_destination_display`
  - <img src="https://pinhead.ink/v2/person_boarding_transit_vehicle_with_destination_display.svg" width="15px"/> `person_boarding_local_transit_vehicle` -> `person_boarding_transit_vehicle_with_destination_display`
  - <img src="https://pinhead.ink/v2/person_boarding_monorail_transit_vehicle_with_destination_display.svg" width="15px"/> `person_boarding_monorail_transit_vehicle` -> `person_boarding_monorail_transit_vehicle_with_destination_display`

### Developer changes

- Add [`migrations.json`](/migrations.json) file

## [1.0.1] - 2026-02-20

- Add `version` property to the `index.json` and `index.complete.json` files

## [1.0.0] - 2026-02-19

_Initial release_
