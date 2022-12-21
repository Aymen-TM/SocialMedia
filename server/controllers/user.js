import User from '../models/User.js'

const getUser = async (req,res)=>{
    try {
        const {id} = req.params 
        const user = await User.find({id})

        res.status(200).json(user)

    } catch (error) {
        res.status(404).json({ error: err.message });
    }
}

const getUserFriends = async (req,res)=>{
    try {
        const {id} = req.params 
        const user = await User.findById({id})

        const friends = await Promise.all(
            user.friends.map((id)=>User.findById({id}))
        )

        const fromattedFriends = friends.map(
            ({_id,firstName,lastName,email,occupation,location,picturePath})=>{_id,firstName,lastName,email,occupation,location,picturePath}
            )
        res.status(200).json(fromattedFriends)

    } catch (error) {
        res.status(404).json({ error: err.message });
    }
}

const addRemoveFriend = async (req,res)=>{
    try {
        const {id,friendId} = req.params
        const user = await User.findById({id}) 
        const friend = await User.findById({friendId}) 

        if(user.friends.includes(friendId)){
            user.friends = user.friends.filter((id)=>id != friendId)
            friend.friends = friend.friends.filter((id)=>id != id)
        }else{
            user.friends.push(friendId)
            friend.friends.push(id)
        }

        await user.save()
        await friend.save()

        const friends = await Promise.all(
            user.friends.map((id)=>User.findById({id}))
        )

        const fromattedFriends = friends.map(
            ({_id,firstName,lastName,email,occupation,location,picturePath})=>{_id,firstName,lastName,email,occupation,location,picturePath}
            )
        res.status(200).json(fromattedFriends)

        
    } catch (error) {
        res.status(404).json({ error: err.message });
    }
}

export {
    getUser,
    getUserFriends,
    addRemoveFriend
}