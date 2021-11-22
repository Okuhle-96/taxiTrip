let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://coderr:1996@localhost:5432/taxi_tests';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {
        
    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepEqual([
            {
              total: '11'
            }
          ]
          , await taxiTrips.totalTripCount());
    

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([
            {
              id: 1,
              region_name: 'Durban'
            },
            {
              id: 2,
              region_name: 'Cape Town'
            },
            {
              id: 3,
              region_name: 'Gauteng'
            }
          ]
           , await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(['NZ 123 123'], await taxiTrips.findTaxisForRegion('Durban'));

        assert.deepStrictEqual(['CA 123 123'], await taxiTrips.findTaxisForRegion('Cape Town'));

        assert.deepStrictEqual(['GP 123 123'], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual([], await taxiTrips.findTripsByRegNumber('NZ'));
        assert.deepStrictEqual([], await taxiTrips.findTripsByRegNumber('CA'));
        assert.deepStrictEqual([], await taxiTrips.findTripsByRegNumber('GP'));

    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([ {
              total: '11'
            }
          ], await taxiTrips.findTripsByRegion('Cape Town'));
       

    });

    it('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(0, await taxiTrips.findIncomeByRegNumber('ND'));
        assert.deepStrictEqual(0, await taxiTrips.findIncomeByRegNumber('CA'));
        assert.deepStrictEqual(0, await taxiTrips.findIncomeByRegNumber('GP'));

    });

    it('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{}, {}, {}], await taxiTrips.findTotalIncomePerTaxi(""));

    });

    it('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual({
               total: '99.00'
             }, await taxiTrips.findTotalIncome(""));
    });


    after(function () {
        pool.end();
    });

});

