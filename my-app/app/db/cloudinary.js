import { v2 as cloudinary, v2 } from 'cloudinary';
// 6WPGK6POO-IgxRj1dp035C0lJCA app secret
// 247691962664795  apikey
// dwssv2iqd   cloud name
// CLOUDINARY_URL=cloudinary://247691962664795:**********@dwssv2iqd   API environment variable

v2.config({
    api_key:"521241235978971",
    cloud_name: "defq6ca7j",
    api_secret:"VtwI_LddeokjuR9GpQL5jtcYkNQ"
})

export async function uploadFile(logoFile){

     let store = await logoFile.arrayBuffer();
    
        let fileKiStream = Buffer.from(store);
    
        return new Promise(function(resolve, error){
    
            let streamer = v2.uploader.upload_stream({folder:"cards"}, function(err, resp){
                 if(err){
            console.error("Cloudinary Upload Error:", err);
            return error(err);
        }
                resolve(resp)
            });

            streamer.end(fileKiStream)

        })
       
        

}

export async function deleteFile(public_id){

      return new Promise(function(resolve, error){
    
            v2.uploader.destroy(public_id, (err, resp)=>{

                if(err){
                    error(err);
                }else{
                    resolve(resp);
                }

            });
            

        })
    
}