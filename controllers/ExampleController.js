class ExampleController {
    constructor(exampleService, redisController) {
        this.exampleService = exampleService;
        this.redisController = redisController;
    }

    async save(req, res) {
        try {
            const body = req.body;
            const created = await this.exampleService.save(body);
            if (created) {
                return res.json(created);
            }
            return res.status(500).json({ reason: "error saving example" });
        } catch (e) {
            return res.status(500).json(e.errors);
        }
    }

    async find(req, res) {
        const query = req.query;
        const range = {};
        let select = "";

        if (query.select) {
            select = query.select;
            delete query.select;
        }

        if (query.limit) {
            range.limit = query.limit;
            delete query.limit;
        }

        if (query.skip) {
            range.skip = query.skip;
            delete query.skip;
        }

        try {
            const results = await this.exampleService.find(
                query,
                select,
                range
            );
            if (results) return res.json(results);
            return res.status(404).json({ reason: "error searching examples" });
        } catch (e) {
            return res.status(500).json(e.errors);
        }
    }

    async findOne(req, res) {
        const query = req.query;
        let select = "";

        if (query.select) {
            select = query.select;
            delete query.select;
        }

        try {
            const results = await this.exampleService.findOne(query, select);
            if (results) return res.json(results);
            return res.sendStatus(404);
        } catch (e) {
            return res.status(500).json(e.errors);
        }
    }

    async findById(req, res) {
        const { _id } = req.params;
        const query = req.query;
        let select = "";

        if (query.select) {
            select = query.select;
            delete query.select;
        }

        try {
            const result = await this.exampleService.findById(_id, select);
            if (result) return res.json(result);
            return res.sendStatus(404);
        } catch (e) {
            return res.status(500).json(e.errors);
        }
    }

    async updateOneById(req, res) {
        const { body, params } = req;
        const { _id } = params;

        try {
            const result = await this.exampleService.updateOneById(_id, body);
            if (result) return res.json(result);
            return res.sendStatus(404);
        } catch (e) {
            return res.status(500).json(e.errors);
        }
    }

    async patchOneById(req, res) {
        const { body, params } = req;
        const { _id } = params;

        try {
            const result = await this.exampleService.replaceOneById(_id, body);
            if (result) return res.json(result);
            return res.sendStatus(404);
        } catch (e) {
            return res.status(500).json(e.errors);
        }
    }

    async deleteById(req, res) {
        const { _id } = req.params;

        try {
            const result = await this.exampleService.deleteById(_id);
            if (result) return res.json(result);
            return res.sendStatus(404);
        } catch (e) {
            return res.status(500).json(e.errors);
        }
    }
}

module.exports = ExampleController;
