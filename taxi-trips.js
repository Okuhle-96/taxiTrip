module.exports = function TaxiTrips(pool) {

	async function totalTripCount(){
        const totalTrips = await pool.query('select sum(taxi_id * routes_id) as total from trips');
        
        return totalTrips.rows;
    }
    
    async function findAllRegions(){
        const allRegions = await pool.query('select * from region');

        return allRegions.rows;
    }
    
    async function findTaxisForRegion(regNumber){
        const findTaxis = await pool.query ('select reg_name from region where region_id = $1', [regNumber]);
        return findTaxis.rows;

    }
    

    async function findTripsByRegNumber(regNumber){
        const tripsByReg = await pool.query ('select sum(taxi_id * routes_id) as taxiTripCount  from trips where reg_number = $1', [regNumber]);
        return tripsByReg.rows;
    }
    
    async function findTripsByRegion(region){
        const tripsByRegion = await pool.query ('select sum(taxi_id * routes_id) as regionTripCount from trips join region on region.id where region_name = $1', [region]);
    return tripsByRegion.rows
    }
    

    async function findIncomeByRegNumber(income){
        const incomeByReg = await pool.query ('select route_fare from taxi where reg_number = $1', [income]);
    return incomeByReg.rows
    }
    

    async function findTotalIncomePerTaxi(income){
      const incomeByTaxi = await pool.query ('select sum(route_fare) from routes where taxi_name = $1', [income]);
    return incomeByTaxi.rows[0].income
    }
    
    async function findTotalIncome(){
        const totalIncome = await pool.query ('select sum(route_fare) as total from routes');
    return totalIncome.rows[0]
    }

    async function findTotalIncomeByRegion(region){
        const IncomeByRegion = await pool.query ('select sum(route_fare) as total_region_income from routes join routes on region.id where region_name = $1', [region]);
    return IncomeByRegion.rows[0]
    }
    
    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion
    }

}