import Button from "./FilterButton";
import './sass-styles/Filters.scss'

export default function Filters (props) {
  return (
    <section className='filter-posts'>
        Filters:
        <Button 
          onClick={props.handleFilters()}
        >
          Language warning
        </Button>

    </section>
  )
}
