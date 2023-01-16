
import { Container, FilterText, FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { setFilterValue, getFilter } from "Redux/phonebookSlice";
export const Filter = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    return (<Container>
        <FilterText>Find contact</FilterText>
        <FilterInput value={filter} onChange={(e) => dispatch(setFilterValue(e.target.value))}></FilterInput>
    </Container>)
}
