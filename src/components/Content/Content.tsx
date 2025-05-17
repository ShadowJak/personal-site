import { StockBrushChart } from '../StockBrushChart/StockBrushChart';
import classes from './Content.module.scss';

export const Content = () => {
    return (
        <div className={classes.content}>
            <StockBrushChart />
        </div>
    )
}