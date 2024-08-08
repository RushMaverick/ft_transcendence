User connects to a tournament room
- check if tournament exists
    <!-- - if not create -->
    - check tournament status
            - check max participants
                - if open add participant
                    - broadcast participan joined
                    - broadcast all pariticipants
            - if closed quit

Match pairing
- create round
- create matches
    - status starting
- send match id to players
- players connect to Pong room
    - players send match id and match room name to Pong room
    - Pong room checks if match exists
        - if not quit
        - if exists
            - check match status
                - if starting join
                - if done quit

After game is done
- Pong saves match data
- Pong somehow signals that match is done to tournament room
- Tournament room adds the match to the round

After all matches in the round are done
- Pair winners
    - loop until there is only one winner left


Notes!
- Tournament needs status
- Matches needs status
- To have more than 4 players, match pairing would need improvements

- Need to store player channel_layers to add players to match rooms
