## Planning
[X] Copy this list into your project
[X] Outline functionality of your app
[X] Draw main views of app
[X] Break out components from your views
[X] Name your components
[X] Draw component hierarchy
[X] Plan routing
[] Label where you will require functions that change state
[] Label where you will require data
[] Determine from this where you will require state & hold functions

## Setup
[X] Create your app directory (e.g. with create-react-app)
[X] Run sudo sysctl fs.inotify.max_user_watches=99999
[X] Run your app
[] Git init (unless cloned!), gitignore config, make an initial commit
[] Ensure you have React DevTools running

## Static
[] Make blank components (functional or class?) as per your plan
[] Create reuasable components e.g. buttons, inputs
[] Export and import components as per your hierarchy
[] Check everything is hooked up
    - you may want to add positional styling here to match your planned layout. DO NOT do any cosmetic styling yet!
[] Write static render methods with mock data
[] Add expected propTypes (adapt this as necessary)

## Dynamic (order may be a bit looser here!)
[] Create .api file
[] Construct componentDidMount functions
[] Create functions that setState
[] Add expected props to component instantiation
[] Add mapping / looping for creating multiple components
[] Deal with component lifecycle issues, e.g. making new api calls on componentDidUpdate
[] Add event handlers

## Style
[] Add classNames
[] Create and .css files
[] Write application CSS - sitewide styling choices like fonts, colour pallettes
[] Write component specific CSS