<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Client;

class MainController extends Controller
{
    //Méthode du controleur le formulaire
    public function formulaire(){
        return view('form');
    }
    public function bg($argument){
        echo "Mon blog je suis $argument";
    }
    //Client
    
    public function saveClient(){
        $cl = new Client;

        $cl->nom = request('nom');
        $cl->prenom = request('prenom');
        $cl->password = request('password');

        $cl->save();

        return redirect('/formulaire')->with('success', 'Client enregistrer avec succès!');
    }

    //Delete
    public function delete_client($id){
        $client = Client::findOrFail($id);
        $client->delete();
        return redirect()->back()->with('success', 'Client supprimé avec succès !');
    }

    //Update
    public function get_one_client($id)
    {
        $client = Client::findOrFail($id);
        return view('edit_form', compact('client'));
    }
    public function update_client(Request $request, $id){
        $request->validate([
            'nom' => 'required|string|max:255',
            'prenom' => 'required|string|max:255',
            'password' => 'required|string|max:255',
        ]);

        $client = Client::findOrFail($id);
        $client->nom = $request->nom;
        $client->prenom = $request->prenom;
        $client->password = $request->password;
        $client->save();

        return redirect()->route('liste_client')->with('success', 'Client mis à jour avec succès !');
    }
}
