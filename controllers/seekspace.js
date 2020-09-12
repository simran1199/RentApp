const Seekspace = require('../models/Seekspace')

exports.getallspaces = async (req, res, next) =>{
    try{
        const w = await Seekspace.find();
        
        res.status(200).json({success: true, data: w, count: w.length })
    }catch(err) {
        res.status(400).json({success: false})
    }
}

exports.createPost = async (req, res, next) => {
    try{
        const y = await Seekspace.create(req.body)
    res.status(201).json({
        success: true,
        data: y
    })
    } catch (err) {
        console.log(err)
        res.status(400).json({success: false})
    }
    
    //console.log(req.body);
    //res.status(200).json({success: true, msg: 'Create the post of your place'})
}

exports.getsinglespace = async (req, res, next) => {
    try{
        const z = await Seekspace.findById(req.params.id)
        if(!z){
            return res.status(400).json({success: false })
        }
    res.status(200).json({
        success: true,
        data: z
    })
    } catch (err) {
        //res.status(400).json({success: false})
        next(err)
    }
    
    //console.log(req.body);
    //res.status(200).json({success: true, msg: 'Create the post of your place'})
}

exports.updatespace = async (req, res, next) =>{
    try{
        const j = await Seekspace.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })

    if(!j){
        return res.status(400).json({success: false})
    }
    res.status(200).json({success: true})
    } catch(err) {
        res.status(400).json({success: false})
    }
}

exports.deletespace = async (req, res, next) =>{
    try{
        const j = await Seekspace.findByIdAndDelete(req.params.id)
    if(!j){
        return res.status(400).json({success: false})
    }
    res.status(200).json({success: true})
    } catch {
        res.status(400).json({success: false})
    }
}