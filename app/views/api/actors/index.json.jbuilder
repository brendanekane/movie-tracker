@actors.each do |actor|
  json.set! actor.id do
    json.partial! 'api/actors/actor', actor: actor
  end
end
